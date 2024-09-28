
// chemical list in json format-->
var chemicalsArray = [
    {
        "id": 1,
        "chemical": "HCL",
        "vendor": "Alpha Lab",
        "density": 3525.92,
        "viscosity": 60.63,
        "packaging": "Bottel",
        "packSize": 15.00,
        "unit": "ml",
        "quantity": 6495.18
    },
    {
        "id": 2,
        "chemical": "Hydrochloric Acid",
        "vendor": "QA Chem",
        "density": 3175.81,
        "viscosity": 50.27,
        "packaging": "Bottel",
        "packSize": 25.00,
        "unit": "ml",
        "quantity": 4812.00
    },
    {
        "id": 3,
        "chemical": "Liquid Nitrogen",
        "vendor": "Nitro Lab",
        "density": 1402.22,
        "viscosity": 15.63,
        "packaging": "Barrel",
        "packSize": 2000.00,
        "unit": "l",
        "quantity": 3221.78
    },
    {
        "id": 4,
        "chemical": "Ferric Nitrate",
        "vendor": "Unit24 chem",
        "density": 364.04,
        "viscosity": 14.16,
        "packaging": "Bag",
        "packSize": 5.00,
        "unit": "kg",
        "quantity": 30
    },
    {
        "id": 5,
        "chemical": "Caustic Soda",
        "vendor": "iSoda Pharma",
        "density": 825.92,
        "viscosity": 71.63,
        "packaging": "Bag",
        "packSize": 5.00,
        "unit": "kg",
        "quantity": 20
    },
    {
        "id": 6,
        "chemical": "Phynol",
        "vendor": "cyprus",
        "density": 35.12,
        "viscosity": 124.03,
        "packaging": "Bottel",
        "packSize": 70.00,
        "unit": "ml",
        "quantity": 640
    },
    {
        "id": 7,
        "chemical": "Potash Alum",
        "vendor": "Wonder Chem",
        "density": 125.92,
        "viscosity": 70.63,
        "packaging": "Bag",
        "packSize": 17.00,
        "unit": "kg",
        "quantity": 95.18
    },
    {
        "id": 8,
        "chemical": "Sulfuric Acid",
        "vendor": "Sulpha Lab",
        "density": 5075.81,
        "viscosity": 1150.27,
        "packaging": "Bottel",
        "packSize": 125.00,
        "unit": "ml",
        "quantity": 112.00
    },
    {
        "id": 9,
        "chemical": "Hydrogen Peroxide",
        "vendor": "Nitro Lab",
        "density": 140.22,
        "viscosity": 150.63,
        "packaging": "Barrel",
        "packSize": 2000.00,
        "unit": "l",
        "quantity": 32
    },
    {
        "id": 10,
        "chemical": "Ferric Oxide",
        "vendor": "Unit24 chem",
        "density": 3611.04,
        "viscosity": 132.16,
        "packaging": "Barrel",
        "packSize": 55.00,
        "unit": "l",
        "quantity": 300
    },
    {
        "id": 11,
        "chemical": "Bi-carbonate",
        "vendor": "Fogg Pharma",
        "density": 8025.92,
        "viscosity": 171.63,
        "packaging": "Bag",
        "packSize": 25.00,
        "unit": "kg",
        "quantity": 27
    },
    {
        "id": 12,
        "chemical": "Methan",
        "vendor": "cyprus Lab",
        "density": 1102.12,
        "viscosity": 24.03,
        "packaging": "Bag",
        "packSize": 70.00,
        "unit": "kg",
        "quantity": 64
    },
    {
        "id": 13,
        "chemical": "Sulphate",
        "vendor": "Hansen Pharma",
        "density": 1100.12,
        "viscosity": 12.03,
        "packaging": "Bottel",
        "packSize": 71.00,
        "unit": "ml",
        "quantity": 60
    },
    {
        "id": 14,
        "chemical": "N-Phynol",
        "vendor": "Cryo Lab",
        "density": 1035.12,
        "viscosity": 1240.03,
        "packaging": "Barrel",
        "packSize": 170.00,
        "unit": "l",
        "quantity": 21
    },
    {
        "id": 15,
        "chemical": "Borex",
        "vendor": "Periodics",
        "density": 3102.12,
        "viscosity": 1024.03,
        "packaging": "Bag",
        "packSize": 20.00,
        "unit": "kg",
        "quantity": 100
    },
];


const tblBody = document.querySelector("#tableStruct tbody");
let rowsToRender = "";
let noOfSelectedRow = [];

function generateNewRows(val){
    rowsToRender += `<tr>
                        <td><input type="checkbox" onclick="checkRow(event)" data-row-id="${val.id}" /></td>
                        <td>${val.id}</td>
                        <td oninput="onChangeInput(event)" data-row-id="${val.id}" data-row-name="chemical" contenteditable>${val.chemical}</td>
                        <td oninput="onChangeInput(event)" data-row-id="${val.id}" data-row-name="vendor" contenteditable>${val.vendor}</td>
                        <td oninput="onChangeInput(event)" data-row-id="${val.id}" data-row-name="density" contenteditable>${val.density}</td>
                        <td oninput="onChangeInput(event)" data-row-id="${val.id}" data-row-name="viscosity" contenteditable>${val.viscosity}</td>
                        <td oninput="onChangeInput(event)" data-row-id="${val.id}" data-row-name="packaging" contenteditable>${val.packaging}</td>
                        <td oninput="onChangeInput(event)" data-row-id="${val.id}" data-row-name="packSize" contenteditable>${val.packSize}</td>
                        <td oninput="onChangeInput(event)" data-row-id="${val.id}" data-row-name="unit" contenteditable>${val.unit}</td>
                        <td oninput="onChangeInput(event)" data-row-id="${val.id}" data-row-name="quantity" contenteditable>${val.quantity}</td>
                    </tr>`;
    return rowsToRender;
}

function render_tab(values){
    values.forEach((val) => generateNewRows(val));
    tblBody.innerHTML = rowsToRender;
};

render_tab(chemicalsArray);


const addRow = () => {
    let row = {
        id: chemicalsArray.length + 1,
        chemical: "",
        vendor: "",
        density: "",
        viscosity: "",
        packaging: "",
        packSize: "",
        unit: "",
        quantity: "",
    };
    chemicalsArray.push(row);
    generateNewRows(row);
    tblBody.innerHTML = rowsToRender;
};

const saveData = () => {
    const updateData = JSON.stringify(chemicalsArray);
    localStorage.setItem("LOCAL_STORAGE", updateData);
}

function getDataFromLocalStorage()  {
    let updatedData = localStorage.getItem("LOCAL_STORAGE");
    chemicalsArray = JSON.parse(updatedData) ? JSON.parse(updatedData) : chemicalsArray;
    console.log(chemicalsArray);
    localStorage.setItem("LOCAL_STORAGE", JSON.stringify(chemicalsArray));
}

window.onbeforeunload = function() {
    getDataFromLocalStorage();
}

function checkRow(e) {
    const elem = e.target;
    const id = Number(elem.dataset.rowId);
    if(elem.checked) {
        noOfSelectedRow.push(id);
    }
    else {
        noOfSelectedRow = noOfSelectedRow.filter((item) => item !== id);
    }
}

function onChangeInput(event) {
    const elem = event.target;  //return <td></td>
    const val = elem.innerHTML; //inner text between <td></td>
    const id = Number(elem.dataset.rowId);  // id belongs to the row
    const columnName = elem.dataset.rowName;
    chemicalsArray[id-1][columnName] = val;
}

function sortTable(val) {
    chemicalsArray = val.sort((a, b)=> a.id - b.id);
}

function moveUp() {
    for (let i = 0; i < noOfSelectedRow.length; i++) {
      let row = noOfSelectedRow[i];
      if (row >= 2) {
        chemicalsArray[row - 2].id = row;
        chemicalsArray[row - 1].id = row - 1;
        sortTable(chemicalsArray);
      }
    }
    noOfSelectedRow = [];
    saveData();
    rowsToRender = "";
    render_tab(chemicalsArray);
}

function moveDown() {
    for (let i = noOfSelectedRow.length - 1; i >= 0; i--) {
        let row = noOfSelectedRow[i];
        if (row < chemicalsArray.length) {
            chemicalsArray[row - 1].id = row + 1;
            chemicalsArray[row].id = row;
            sortTable(chemicalsArray);
        }
    }
    noOfSelectedRow = [];
    saveData();
    rowsToRender = "";
    render_tab(chemicalsArray);
}

function refreshData(){
    getDataFromLocalStorage();
    rowsToRender = "";
    render_tab(chemicalsArray);
}

function sortId() {
    for (let i = 0; i < chemicalsArray.length; i++) {
      const row = chemicalsArray[i];
      row.id = i + 1;
    }
}

function deleteRow(){
    for (let i = 0; i < noOfSelectedRow.length; i++) {
        let row = noOfSelectedRow[i];
        chemicalsArray = chemicalsArray.filter((item) => item.id !== row);
    }
    noOfSelectedRow = [];
    sortId();
    saveData();
    rowsToRender = "";
    render_tab(chemicalsArray);
}



let table_headings = document.querySelectorAll('thead th');
let table_rows = document.querySelectorAll('tbody tr');

var sort_asc = false;
table_headings.forEach((head, idx)=>{
    
    head.onclick = () =>{
        sortTableUse(idx, sort_asc);
        sort_asc = !sort_asc;
    }
});

function sortTableUse(column, sort_asc){
    [...table_rows].sort((a,b)=>{
        let first_row = a.querySelectorAll('td')[column].textContent.toLowerCase();
        let second_row = b.querySelectorAll('td')[column].textContent.toLowerCase();
        return sort_asc ? (first_row < second_row ? 1 : -1) : (first_row < second_row ? -1 : 1);
    }).map(sorted_row => document.querySelector('tbody').appendChild(sorted_row));
}