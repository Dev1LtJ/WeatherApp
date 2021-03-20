export function createItem () {
    let item = document.createElement('DIV');
    item.className = 'air-quality__item';

    let logo = document.createElement('DIV');
    logo.className = 'air-quality__item-logo';

    let data = document.createElement('DIV');
    data.className = 'air-quality__item-data';
    let title = document.createElement('DIV');
    title.className = 'air-quality__item-title';
    let text = document.createElement('DIV');
    text.className = 'air-quality__item-text';
    let conc = document.createElement('DIV');
    conc.className = 'air-quality__item-concentration';
    data.append(title);
    data.append(text);
    data.append(conc);

    item.append(logo);
    item.append(data);

    return item;
}