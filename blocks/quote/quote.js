export default function decorate(block) {
  const quoteDiv = block.querySelector(':scope > div > div > p');
  const blockQuote = document.createElement('blockquote');
  blockQuote.innerHTML = `"${quoteDiv.innerHTML}"`;
  quoteDiv.parentElement.replaceWith(blockQuote);

  const authorDiv = block.querySelector(':scope > div > div');
  if (authorDiv) {
    const p = document.createElement('p');
    p.innerHTML = `<em> - ${authorDiv.innerText}</em>`;
    authorDiv.parentElement.replaceWith(p);
  }
}