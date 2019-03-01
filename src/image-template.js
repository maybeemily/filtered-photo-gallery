function makeImageTemplate(image) {
    const html = `
    <li>
    <h2>${image.title}</h2>
    <p>Medium: ${image.medium}</p>
    <p class="animal-number"># of Animals: ${image.animalNumber}</p>
   <a href="${image.url}"><img src="${image.src}"></a>
    
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default makeImageTemplate;