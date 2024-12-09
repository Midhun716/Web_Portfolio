function downloadResume() {
  const link = document.createElement('a');
  link.href = 'assets/Midhun_Resume.pdf'; // Ensure this is the correct path to your resume file
  link.download = 'Midhun_Resume.pdf';
  link.click();
}
