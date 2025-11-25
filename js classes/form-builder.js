class FormBuilder {
  constructor(fields) {
    this.fields = fields;
  }

  renderForm(containerId) {
    const form = document.createElement("form");
    form.id = "dynamicForm";

    this.fields.forEach(field => {
      form.innerHTML += `<label>${field.label}</label>
                         <input type="${field.type}" name="${field.label}"><br>`;
    });

    form.innerHTML += `<button type="submit">Submit</button>`;
    document.getElementById(containerId).appendChild(form);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(this.getFormData());
    });
  }

  getFormData() {
    const data = {};
    this.fields.forEach(field => {
      data[field.label] = document.querySelector(`[name="${field.label}"]`).value;
    });
    return data;
  }
}

const fb = new FormBuilder([{type:'text', label:'Username'}, {type:'email', label:'Email'}]);
fb.renderForm("formContainer");