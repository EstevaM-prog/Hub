

const daysContainer = document.getElementById("days");
const monthYear = document.getElementById("monthYear");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

function renderCalendar(month, year) {
    daysContainer.innerHTML = "";

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    monthYear.textContent = `${months[month]} ${year}`;

    // espaços em branco antes do primeiro dia
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement("div");
        daysContainer.appendChild(emptyDiv);
    }

    // dias do mês
    for (let day = 1; day <= lastDate; day++) {
        const dayDiv = document.createElement("div");
        dayDiv.textContent = day;

        // destaque para o dia atual
        const today = new Date();
        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dayDiv.classList.add("today");
        }

        // clique no dia
        dayDiv.addEventListener("click", () => alert(`Você clicou no dia ${day}/${month+1}/${year}`));
        daysContainer.appendChild(dayDiv);
    }
}

// Navegação
prevBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
});

nextBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
});

// Inicializa calendário
renderCalendar(currentMonth, currentYear);
