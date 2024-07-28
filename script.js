function generateReadme() {
  const name = document.getElementById('name').value;
  const subtitle = document.getElementById('subtitle').value;
  const work = document.getElementById('work').value;
  const workLink = document.getElementById('workLink').value;
  const collaborate = document.getElementById('collaborate').value;
  const collaborateLink = document.getElementById('collaborateLink').value;
  const help = document.getElementById('help').value;
  const helpLink = document.getElementById('helpLink').value;
  const learning = document.getElementById('learning').value;
  const ask = document.getElementById('ask').value;
  const contact = document.getElementById('contact').value;
  const portfolio = document.getElementById('portfolio').value;
  const blog = document.getElementById('blog').value;
  const resume = document.getElementById('resume').value;
  const funFact = document.getElementById('funFact').value;
  const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim()).join(', ');

  const github = document.getElementById('github').value;
  const linkedin = document.getElementById('linkedin').value;
  const twitter = document.getElementById('twitter').value;
  const devto = document.getElementById('devto').value;
  const codepen = document.getElementById('codepen').value;

  const markdown = `
# Hi 👋, I'm ${name}

## ${subtitle}

- 🔭 I’m currently working on [${work}](${workLink})
- 👯 I’m looking to collaborate on [${collaborate}](${collaborateLink})
- 🤝 I’m looking for help with [${help}](${helpLink})
- 🌱 I’m currently learning ${learning}
- 💬 Ask me about ${ask}
- 📫 How to reach me **${contact}**
- 👨‍💻 All of my projects are available at [${portfolio}](${portfolio})
- 📝 I regularly write articles on [${blog}](${blog})
- 📄 Know about my experiences [Resume](${resume})
- ⚡ Fun fact **${funFact}**

## Skills

I am proficient in ${skills}

## Social Links

Connect with me on:

- [GitHub](https://github.com/${github})
- [LinkedIn](https://linkedin.com/in/${linkedin})
${twitter ? `- [Twitter](https://twitter.com/${twitter})\n` : ''}
${devto ? `- [Dev.to](https://dev.to/${devto})\n` : ''}
${codepen ? `- [Codepen](https://codepen.io/${codepen})\n` : ''}
`;

  document.getElementById('readmeOutput').innerText = markdown;
}

document.getElementById('generateBtn').addEventListener('click', generateReadme);

document.getElementById('copyBtn').addEventListener('click', () => {
  const readmeContent = document.getElementById('readmeOutput').innerText;
  navigator.clipboard.writeText(readmeContent).then(() => {
    alert('README content copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
});