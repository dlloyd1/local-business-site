const loadComponent = (querySelectorString, pathToComponentFile) => {
    document.querySelectorAll(querySelectorString).forEach(ele => {
        fetch(pathToComponentFile)
        .then(response => response.text())
        .then(html => {
            ele.innerHTML = html;
        })
    })
}

const includeHTML = () => {
    const componentFileSelectorToPath = {
        '[data-include-header]': 'components/header.html',
        '[data-include-nav]': 'components/nav-bar.html',
        '[data-include-footer]': 'components/footer.html'
    }

    Object.keys(componentFileSelectorToPath).forEach(fileSelectorString => {
        loadComponent(fileSelectorString, componentFileSelectorToPath[fileSelectorString])
    })
}

document.addEventListener('DOMContentLoaded', includeHTML);
