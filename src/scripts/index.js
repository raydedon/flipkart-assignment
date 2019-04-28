import '../styles/index.scss';

fetch('https://flipkart-configuration-table.now.sh/api')
	.then(r => r.json())
	.then(r => {
		document.querySelector('body').appendChild(drawFullGrid(r));
	});

function drawFullGrid(r) {
	
	let fullGrid = document.createElement('div');
	fullGrid.className = 'container full-grid';
	fullGrid.appendChild(drawTopHeader());

	fullGrid.appendChild(drawGrid(r));
	
	fullGrid.appendChild(drawFooter());
	return fullGrid;

	
}

function drawTopHeader() {
	let topHeader = document.createDocumentFragment();
	let input = document.createElement('input');
	input.className = 'filter-input';
	let inputCheckBox = document.createElement('input');
	inputCheckBox.type = "checkbox";
	inputCheckBox.className = "filter-input-box";
	topHeader.appendChild(input);
	topHeader.appendChild(inputCheckBox);
	return topHeader;
}

function drawFooter() {
	let btn = document.createElement('button');
	btn.className = "btn";
	btn.innerHTML = 'done';
	
	btn.addEventListener('click', (e) => {
		let JSONArray = [];
		JSONArray.push(Array.from(document.querySelectorAll('.checkbox')).filter(el => el.checked).map(el => JSON.parse(el.value)));
		console.info(JSON.stringify(JSONArray, null, 4));
	});
	
	return btn;
}

function drawGrid({config = []}) {
	
	let grid = document.createElement('div');
	grid.className = 'table-view-grid';
	grid.appendChild(getGridHeader());
	
	config.map(obj => {
		let {label = '', field, selected = false, description = ''} = obj;
		let {defaultValue = '', type = '', options = []} = field;
		
		let checkBox = document.createElement('div');
		checkBox.className = 'col-1 cell';
		checkBox.appendChild(getCheckBox(obj));
		grid.appendChild(checkBox);
		
		let key = document.createElement('div');
		key.className = 'col-2 cell';
		key.innerHTML = label;
		grid.appendChild(key);
		
		let value = document.createElement('div');
		value.className = 'col-3 cell';
		value.appendChild(getElementByType(field));
		grid.appendChild(value);
		
		let descriptionHtml = document.createElement('div');
		descriptionHtml.className = 'col-4 cell';
		descriptionHtml.innerHTML = description;
		grid.appendChild(descriptionHtml);
	});
	return grid;
}

export function getGridHeader() {
	let gridHeader = document.createDocumentFragment();
	let checkBoxHeader = document.createElement('div');
	checkBoxHeader.className = 'col-header-1 cell';
	gridHeader.appendChild(checkBoxHeader);
	
	let keyHeader = document.createElement('div');
	keyHeader.className = 'col-header-2 cell';
	keyHeader.innerHTML = 'Key';
	gridHeader.appendChild(keyHeader);
	
	let valueHeader = document.createElement('div');
	valueHeader.className = 'col-header-3 cell';
	valueHeader.innerHTML = 'Value';
	gridHeader.appendChild(valueHeader);
	
	let descriptionHeader = document.createElement('div');
	descriptionHeader.className = 'col-header-4 cell';
	descriptionHeader.innerHTML = 'Description';
	gridHeader.appendChild(descriptionHeader);
	return gridHeader;
}

function getCheckBox(obj) {
	let {key = '', label = '', field, selected = false, description = ''} = obj;
	let checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.name = "name";
	checkbox.className = "checkbox";
	checkbox.value = JSON.stringify(obj);
	checkbox.id = key;
	checkbox.checked = selected;
	return checkbox;
}

function getElementByType({defaultValue = '', type = '', options = []}) {
	switch(type) {
		case 'select': {
			let selectBox = document.createElement("select");
			selectBox.className = "select-box";
			for(let i = 0; i < options.length; i++) {
				let option = document.createElement("option");
				option.value = options[i];
				option.text = options[i];
				selectBox.appendChild(option);
			}
			selectBox.value = defaultValue;
			return selectBox;
		}
		default: {
			let input = document.createElement('input');
			input.type = "text";
			input.className = "input-box";
			input.value = defaultValue;
			return input;
		}
	}
}


