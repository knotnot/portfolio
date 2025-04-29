function toggleDetails(activityId) {
    const details = document.getElementById(`activity-details-${activityId}`);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
