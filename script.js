function calculateGrade() {
    const totalAssignments = parseInt(document.getElementById('assignments').value);
    const assignmentScore = parseInt(document.getElementById('assignmentScore').value);
    const totalExams = parseInt(document.getElementById('exams').value);
    const examScore = parseInt(document.getElementById('examScore').value);

    const totalScore = (totalAssignments * assignmentScore + totalExams * examScore) / (totalAssignments + totalExams);

    let grade;
    if (totalScore >= 90) {
        grade = 'A';
    } else if (totalScore >= 80) {
        grade = 'B';
    } else if (totalScore >= 70) {
        grade = 'C';
    } else if (totalScore >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Total Score: ${totalScore.toFixed(2)} | Grade: ${grade}`;
}
