const TODO_URL = "TODO.md";
const NOTES_URL = "NOTES.md";

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function inlineMarkdown(text) {
  let html = escapeHtml(text);
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  return html;
}

function parseTodo(markdown) {
  const phases = [];
  const questions = [];
  let phase = null;
  let group = null;
  let inQuestions = false;

  for (const rawLine of markdown.split("\n")) {
    const line = rawLine.trimEnd();
    const heading = line.match(/^##\s+(.+)/);
    const subheading = line.match(/^###\s+(.+)/);
    const task = line.match(/^- \[( |x|X)\]\s+(.+)/);
    const bullet = line.match(/^- \s*(.+)/);

    if (heading) {
      const title = heading[1].trim();
      inQuestions = /^open questions/i.test(title);
      group = null;
      if (inQuestions) {
        phase = null;
        continue;
      }
      phase = { title, blurbs: [], tasks: [], groups: [] };
      phases.push(phase);
      continue;
    }

    if (!inQuestions && subheading && phase) {
      group = { title: subheading[1].trim(), blurbs: [], tasks: [] };
      phase.groups.push(group);
      continue;
    }

    if (task) {
      const item = { done: task[1].toLowerCase() === "x", label: task[2].trim() };
      if (inQuestions) continue;
      if (group) group.tasks.push(item);
      else if (phase) phase.tasks.push(item);
      continue;
    }

    if (inQuestions && bullet) {
      questions.push(bullet[1].trim());
      continue;
    }

    if (line.trim() && !line.startsWith("#")) {
      if (inQuestions) questions.push(line.trim());
      else if (group) group.blurbs.push(line.trim());
      else if (phase) phase.blurbs.push(line.trim());
    }
  }

  return { phases, questions };
}

function countTasks(phase) {
  const all = [...phase.tasks, ...phase.groups.flatMap((group) => group.tasks)];
  const done = all.filter((task) => task.done).length;
  return { total: all.length, done };
}

function firstOpenTask(phases) {
  for (const phase of phases) {
    for (const task of phase.tasks) {
      if (!task.done) return { phase, task };
    }
    for (const group of phase.groups) {
      for (const task of group.tasks) {
        if (!task.done) return { phase, task };
      }
    }
  }
  return null;
}

function taskHtml(task) {
  const state = task.done ? "done" : "";
  return `<div class="task ${state}"><span class="box" aria-hidden="true"></span><span class="label">${inlineMarkdown(task.label)}</span></div>`;
}

function renderChecklist(parsed) {
  const rail = document.getElementById("phase-rail");
  const root = document.getElementById("checklist");
  const totals = parsed.phases.map(countTasks);
  const doneAll = totals.reduce((sum, row) => sum + row.done, 0);
  const totalAll = totals.reduce((sum, row) => sum + row.total, 0);
  const percent = totalAll === 0 ? 0 : Math.round((doneAll / totalAll) * 100);

  document.getElementById("score").textContent =
    `${doneAll} / ${totalAll} tasks · ${percent}%`;

  const next = firstOpenTask(parsed.phases);
  if (next) {
    document.getElementById("next-title").innerHTML = inlineMarkdown(next.task.label);
    document.querySelector("#next .ticket-detail").textContent = next.phase.title;
  }

  rail.innerHTML = parsed.phases
    .map((phase, index) => {
      const { done, total } = totals[index];
      const current = next && next.phase === phase;
      const klass = done === total && total > 0 ? "done" : current ? "current" : "";
      const id = `phase-${index}`;
      return `<a class="phase-chip ${klass}" href="#${id}">${escapeHtml(phase.title.split("—")[0].trim())} ${done}/${total}</a>`;
    })
    .join("");

  root.innerHTML = parsed.phases
    .map((phase, index) => {
      const { done, total } = totals[index];
      const blurbs = phase.blurbs.map((line) => `<p class="blurb">${inlineMarkdown(line)}</p>`).join("");
      const tasks = phase.tasks.map(taskHtml).join("");
      const groups = phase.groups
        .map((group) => {
          const groupDone = group.tasks.filter((task) => task.done).length;
          const groupBlurbs = group.blurbs.map((line) => `<p class="blurb">${inlineMarkdown(line)}</p>`).join("");
          return `<details class="group"><summary>${escapeHtml(group.title)} (${groupDone}/${group.tasks.length})</summary>${groupBlurbs}${group.tasks.map(taskHtml).join("")}</details>`;
        })
        .join("");
      return `<article class="phase" id="phase-${index}"><h3>${inlineMarkdown(phase.title)} <span class="meta">${done}/${total}</span></h3>${blurbs}${tasks}${groups}</article>`;
    })
    .join("");

  if (parsed.questions.length) {
    root.insertAdjacentHTML(
      "beforeend",
      `<aside class="questions"><h3>Open questions</h3><ul>${parsed.questions.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul></aside>`
    );
  }
}

function parseNotes(markdown) {
  const entries = [];
  let current = null;
  for (const rawLine of markdown.split("\n")) {
    const line = rawLine.trimEnd();
    const heading = line.match(/^##\s+(.+)/);
    const bullet = line.match(/^- \s*(.+)/);
    if (heading) {
      current = { title: heading[1].trim(), items: [] };
      entries.push(current);
      continue;
    }
    if (current && bullet) current.items.push(bullet[1].trim());
    else if (current && line.trim() && !line.startsWith("#")) current.items.push(line.trim());
  }
  return entries;
}

function renderNotes(entries) {
  const root = document.getElementById("notes-list");
  if (!entries.length) {
    root.innerHTML = "<p class=\"error\">No notes found.</p>";
    return;
  }
  root.innerHTML = entries
    .map((entry) => {
      const items = entry.items.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("");
      return `<article class="entry"><h3>${escapeHtml(entry.title)}</h3><ul>${items}</ul></article>`;
    })
    .join("");
}

function setupLightbox() {
  const dialog = document.getElementById("lightbox");
  const img = dialog.querySelector("img");
  document.querySelectorAll(".photos a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      img.src = link.getAttribute("href");
      img.alt = link.querySelector("img")?.alt || "";
      dialog.showModal();
    });
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

async function load() {
  try {
    const [todoRes, notesRes] = await Promise.all([fetch(TODO_URL), fetch(NOTES_URL)]);
    if (!todoRes.ok) throw new Error(`TODO.md ${todoRes.status}`);
    if (!notesRes.ok) throw new Error(`NOTES.md ${notesRes.status}`);
    renderChecklist(parseTodo(await todoRes.text()));
    renderNotes(parseNotes(await notesRes.text()));
  } catch (error) {
    document.getElementById("checklist").innerHTML =
      `<p class="error">Could not load the checklist (${escapeHtml(error.message)}). Open this page from GitHub Pages or a local server, not as a file:// URL.</p>`;
    document.getElementById("notes-list").innerHTML = "";
    document.getElementById("score").textContent = "Checklist unavailable";
  }
}

setupLightbox();
load();
