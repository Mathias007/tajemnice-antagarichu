const categories = document.querySelectorAll(".blocktable > .box");
const announcement = document.querySelector("#announce > .box");

const categoryHeaders = document.querySelectorAll(".blocktable > h2");
const announcementHeader = document.querySelector("#announce > h2");

toggleIcon = (header, categoryIndex) => {
    const iconToToggle = header.querySelector("i");

    if (categoryIndex === "announcement") {
        announcement.classList.contains("hidden")
            ? iconToToggle.classList.replace("fa-chevron-up", "fa-chevron-down")
            : iconToToggle.classList.replace(
                  "fa-chevron-down",
                  "fa-chevron-up"
              );
    } else {
        categories[categoryIndex].classList.contains("hidden")
            ? iconToToggle.classList.replace("fa-chevron-up", "fa-chevron-down")
            : iconToToggle.classList.replace(
                  "fa-chevron-down",
                  "fa-chevron-up"
              );
    }
};

createIcon = (header) => {
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-chevron-up");
    icon.style.float = "right";
    icon.style.padding = "10px";
    header.appendChild(icon);
};

toggleCategoryVisibility = (index) => {
    if (index === "announcement") {
        announcement.classList.toggle("hidden");
        toggleIcon(announcementHeader, "announcement");
    } else {
        categories[index].classList.toggle("hidden");
        toggleIcon(categoryHeaders[index], index);
    }
};

categoryHeaders.forEach((header, index) => {
    header.addEventListener("click", () => toggleCategoryVisibility(index));
    createIcon(header);
});

announcementHeader.addEventListener("click", () =>
    toggleCategoryVisibility("announcement")
);

createIcon(announcementHeader);
