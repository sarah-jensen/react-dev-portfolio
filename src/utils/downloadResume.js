export default function downloadResume() {
      const link = document.createElement("a");
      link.download = `/Sarah-Jensen_resume.pdf`;
      link.href = "../../assets/files/Sarah-Jensen_resume.pdf";
      link.click();
    };