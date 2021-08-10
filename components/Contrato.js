import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import axios from "axios";
import { message } from "antd";
import VALIDATION from "../validation";

const creditCardType = require("credit-card-type");
const ValidationService = new VALIDATION();
const styles = { marginTop: "8vh" };
const key = "Clip";

const catForm = {
  EXPIRECTIODATE: [
    { value: 1, label: "01" },
    { value: 2, label: "02" },
    { value: 3, label: "03" },
    { value: 4, label: "04" },
    { value: 5, label: "05" },
    { value: 6, label: "06" },
    { value: 7, label: "07" },
    { value: 8, label: "08" },
    { value: 9, label: "09" },
    { value: 10, label: "10" },
    { value: 11, label: "11" },
    { value: 12, label: "12" },
  ],
  YEARCARD: [
    { value: 2021, label: "2021" },
    { value: 2022, label: "2022" },
    { value: 2023, label: "2023" },
    { value: 2024, label: "2024" },
    { value: 2025, label: "2025" },
    { value: 2026, label: "2026" },
    { value: 2027, label: "2027" },
    { value: 2028, label: "2028" },
    { value: 2029, label: "2029" },
    { value: 2030, label: "2030" },
    { value: 2031, label: "2031" },
    { value: 2032, label: "2032" },
  ],
  GENERO: [
    { value: 1, label: "MASCULINO" },
    { value: 2, label: "FEMENINO" },
  ],
};
class creditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infocard: {
        nameClient: "",
        mail: "",
        numberPhone: "",
        location: "",
        curp: "",
        // expiration
      },
      formCardCred: [
        // {
        //   id: 'cardNumber',
        //   required: true,
        //   name: 'cardNumber',
        //   className: 'card-input col-md-12 marginBform',
        //   labelText: 'Card Number',
        //   classNameLabel: 'card-input__label',
        //   datatype: 'Input',
        //   type: '',
        //   inputClass: '__input',
        //   value: '',
        //   maxlength: '16',
        //   regExp: /^[0-9]{0,16}$/,
        //   style: {},
        // },
        {
          id: "nameClient",
          required: true,
          name: "nameClient",
          className: "card-input col-md-12 marginBform",
          labelText: "Name",
          classNameLabel: "card-input__label",
          type: "",
          datatype: "Input",
          inputClass: "__input",
          value: "",
          maxlength: "60",
          regExp: /^[a-zA-Z ]*$/,
          style: {},
        },
        {
          id: 'generoClient',
          required: true,
          name: 'generoClient',
          className: 'card-input col-md-12 marginBform',
          labelText: 'Genero',
          classNameLabel: 'card-input__label',
          type: '',
          datatype: 'Select',
          inputClass: '__input _select',
          value: '',
          options: 'GENERO',
          style: {},
        },
        {
          id: "countryBirth",
          required: true,
          name: "countryBirth",
          className: "card-input col-md-12 marginBform",
          labelText: "Pais de Nacimiento",
          classNameLabel: "card-input__label",
          type: "",
          datatype: "Input",
          inputClass: "__input",
          value: "",
          maxlength: "60",
          regExp: /^[a-zA-Z ]*$/,
          style: {},
        },
        {
          id: "mail",
          required: true,
          name: "mail",
          className: "card-input col-md-12 marginBform",
          labelText: "Mail",
          classNameLabel: "card-input__label",
          type: "",
          datatype: "Input",
          inputClass: "__input",
          value: "",
          // maxlength: "6",
          // regExp: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
          style: {},
        },
        {
          id: "numberPhone",
          required: true,
          name: "numberPhone",
          className: "card-input col-md-12 marginBform",
          labelText: "Telefono",
          classNameLabel: "card-input__label",
          datatype: "Input",
          type: "",
          inputClass: "__input",
          value: "",
          maxlength: "16",
          regExp: /^[0-9]{0,16}$/,
          style: {},
        },
        {
          id: "location",
          required: true,
          name: "location",
          className: "card-input col-md-12 marginBform",
          labelText: "Direccion",
          classNameLabel: "card-input__label",
          type: "",
          datatype: "Input",
          inputClass: "__input",
          value: "",
          maxlength: "1000",
          regExp: /^[a-zA-Z ]*$/,
          style: {},
        },
        {
          id: "curp",
          required: true,
          name: "curp",
          className: "card-input col-md-12 marginBform",
          labelText: "Curp",
          classNameLabel: "card-input__label",
          type: "",
          datatype: "Input",
          inputClass: "__input",
          value: "",
          maxlength: "60",
          regExp: /^[a-zA-Z ]*$/,
          style: {},
        },
        // {
        //   id: 'yeardCard',
        //   required: true,
        //   name: 'yeardCard',
        //   className: 'card-input col-md-4 marginBform',
        //   labelText: '',
        //   classNameLabel: 'card-input__label',
        //   type: '',
        //   datatype: 'Select',
        //   inputClass: '__input _select',
        //   value: '',
        //   options: 'YEARCARD',
        //   style: {},
        // },
      ],
      formMedia:[
        {
          id: 'phoneHouse',
          required: true,
          name: 'phoneHouse',
          className: 'card-input col-md-12 marginBform',
          labelText: 'Telefono de casa',
          classNameLabel: 'card-input__label',
          datatype: 'Input',
          type: '',
          inputClass: '__input',
          value: '',
          maxlength: '16',
          regExp: /^[0-9]{0,16}$/,
          style: {},
        },
        {
          id: 'phoneOffice',
          required: true,
          name: 'phoneOffice',
          className: 'card-input col-md-12 marginBform',
          labelText: 'Telefono de Oficina',
          classNameLabel: 'card-input__label',
          datatype: 'Input',
          type: '',
          inputClass: '__input',
          value: '',
          maxlength: '16',
          regExp: /^[0-9]{0,16}$/,
          style: {},
        },
      ],
      formBeneficiaries:[
        {
          id: "nameBeneficiaries1",
          required: true,
          name: "nameBeneficiaries1",
          className: "card-input col-md-12 marginBform",
          labelText: "Benficiario 1",
          classNameLabel: "card-input__label",
          type: "",
          datatype: "Input",
          inputClass: "__input",
          value: "",
          maxlength: "1000",
          regExp: /^[a-zA-Z ]*$/,
          style: {},
        },
        {
          id: "birthBeneficiaries1",
          required: true,
          name: "birthBeneficiaries1",
          className: "card-input col-md-12 marginBform",
          labelText: "Fecha de nacimeinto",
          classNameLabel: "card-input__label",
          type: "",
          datatype: "Input",
          inputClass: "__input",
          value: "",
          maxlength: "1000",
          regExp: /^[a-zA-Z ]*$/,
          style: {},
        },
        {
          id: 'percentageBeneficiaries1',
          required: true,
          name: 'percentageficiaries1',
          className: 'card-input col-md-12 marginBform',
          labelText: 'Porcentaje',
          classNameLabel: 'card-input__label',
          datatype: 'Input',
          type: '',
          inputClass: '__input',
          value: '',
          maxlength: '16',
          regExp: /^[0-9]{0,16}$/,
          style: {},
        },
        {
          id: "locationBeneficiaries1",
          required: true,
          name: "locationBeneficiaries1",
          className: "card-input col-md-12 marginBform",
          labelText: "Domicilio",
          classNameLabel: "card-input__label",
          type: "",
          datatype: "Input",
          inputClass: "__input",
          value: "",
          maxlength: "1000",
          regExp: /^[a-zA-Z ]*$/,
          style: {},
        },
        {
          id: 'phoneBeneficiaries1',
          required: true,
          name: 'phoneBeneficiaries1',
          className: 'card-input col-md-12 marginBform',
          labelText: 'Telefono',
          classNameLabel: 'card-input__label',
          datatype: 'Input',
          type: '',
          inputClass: '__input',
          value: '',
          maxlength: '16',
          regExp: /^[0-9]{0,16}$/,
          style: {},
        },
        

        {
          id: "nameBeneficiaries2",
          required: true,
          name: "nameBeneficiaries2",
          className: "card-input col-md-12 marginBform",
          labelText: "Benficiario 1",
          classNameLabel: "card-input__label",
          type: "",
          datatype: "Input",
          inputClass: "__input",
          value: "",
          maxlength: "1000",
          regExp: /^[a-zA-Z ]*$/,
          style: {},
        },
        {
          id: "birthBeneficiaries2",
          required: true,
          name: "birthBeneficiaries2",
          className: "card-input col-md-12 marginBform",
          labelText: "Fecha de nacimeinto",
          classNameLabel: "card-input__label",
          type: "",
          datatype: "Input",
          inputClass: "__input",
          value: "",
          maxlength: "1000",
          regExp: /^[a-zA-Z ]*$/,
          style: {},
        },
        {
          id: 'percentageBeneficiaries2',
          required: true,
          name: 'percentageficiaries2',
          className: 'card-input col-md-12 marginBform',
          labelText: 'Porcentaje',
          classNameLabel: 'card-input__label',
          datatype: 'Input',
          type: '',
          inputClass: '__input',
          value: '',
          maxlength: '16',
          regExp: /^[0-9]{0,16}$/,
          style: {},
        },
        {
          id: "locationBeneficiaries2",
          required: true,
          name: "locationBeneficiaries2",
          className: "card-input col-md-12 marginBform",
          labelText: "Domicilio",
          classNameLabel: "card-input__label",
          type: "",
          datatype: "Input",
          inputClass: "__input",
          value: "",
          maxlength: "1000",
          regExp: /^[a-zA-Z ]*$/,
          style: {},
        },
        {
          id: 'phoneBeneficiaries2',
          required: true,
          name: 'phoneBeneficiaries2',
          className: 'card-input col-md-12 marginBform',
          labelText: 'Telefono',
          classNameLabel: 'card-input__label',
          datatype: 'Input',
          type: '',
          inputClass: '__input',
          value: '',
          maxlength: '16',
          regExp: /^[0-9]{0,16}$/,
          style: {},
        },
      ],
      formemployee:[

      ],

      Inputs: [],
      creditCard: [],
    };
  }

  getInfoDashBoard = async () => {
    try {
      this.buildForm();
    } catch (error) {
      console.warn("error", error);
    }
  };

  componentDidMount() {
    this.getInfoDashBoard();
  }

  changeInput = (id, exp) => (event) => {
    let { infocard, formCardCred } = this.state;
    formCardCred.forEach((e) => {
      e.style = { color: "#000001" };
      e.error = "";
    });
    if (exp) {
      const emailRegex = new RegExp(exp);
      if (emailRegex.test(event.target.value)) {
        infocard[id] = event.target.value;

        this.setState({ infocard, formCardCred }, () => {
          this.buildForm();
        });
      }
    } else {
      infocard[id] = event.target.value;

      this.setState({ infocard, formCardCred }, () => {
        this.buildForm();
      });
    }
  };

  changeSelect = (id) => (event) => {
    let { infocard } = this.state;
    infocard[id] = event.target.value;
    this.setState({ infocard }, () => {
      this.buildForm();
    });
  };

  buildForm = () => {
    let { infocard, formCardCred } = this.state;
    let Inputs = formCardCred.map((e) => {
      if (e.datatype === "Input")
        return (
          <div class={e.className}>
            <label style={e.style} for={e.name} class={e.classNameLabel}>
              {e.labelText}
            </label>
            <input
              type={e.type}
              id={e.id}
              onChange={this.changeInput(e.id, e.regExp)}
              class={e.inputClass}
              value={infocard[e.id]}
              maxlength={e.maxlength}
              data-card-field
              autocomplete="off"
            />
          </div>
        );
      else if (e.datatype === "Select")
        return (
          <div class={e.className}>
            <label
              style={{ marginBottom: e.labelText === "" ? "4em" : "" }}
              for={e.name}
              class={e.classNameLabel}
            >
              {e.labelText}
            </label>
            <select
              style={e.style}
              class={e.inputClass}
              id={e.id}
              value={infocard[e.id]}
              change=""
              onChange={this.changeSelect(e.id)}
              data-card-field
            >
              {catForm[e.options].map((e) => {
                return <option value={e.value}>{e.label}</option>;
              })}
            </select>
          </div>
        );

      return 0;
    });
    this.setState({
      Inputs,
    });
  };

  submitData = async () => {
    let { infocard } = this.state;

    console.log("infocard---->>>", infocard);

    try {
      await axios.post('api/createContact', {
        infocard,
      });
      message.success({
        content: 'Tu formulario fue enviado con exito',
        key,
        style: styles,
        duration: 2,
      });
    } catch (error) {
      message.error("Internal server Error");
    }
  };

  validateCardCred = async () => {
    let { infocard, formCardCred } = this.state;

    let BODY = {
      headerDetails: infocard,
    };
    ValidationService.validate({
      target: "CREDIT-CARD",
      data: BODY,
    })
      .then(() => {
        formCardCred.forEach((e) => {
          e.style = { color: "#000001" };
          e.error = "";
        });
        this.setState(
          {
            formCardCred,
          },
          () => {
            this.buildForm();
            this.submitData();
          }
        );
      })
      .catch((errors) => {
        console.warn("ERROR", errors);
        let Element = document.getElementById(Object.keys(errors)[0]);
        if (Element) {
          Element.scrollIntoView({ block: "end", behavior: "smooth" });
          Element.focus();
        }
        formCardCred.forEach((e) => {
          if (errors[e.id]) {
            e.style = { color: "#e57373" };
            e.error = errors[e.id].label;
          } else {
            e.error = "";
            e.style = { color: "#000001" };
          }
        });
        this.setState({ formCardCred }, () => {
          this.buildForm();
          message.error({
            content: "There are some errors",
            className: "classCustomMessa",
          });
        });
      });
  };

  render() {
    const { Inputs } = this.state;
    return (
      <>
        <section className="App-content">
          <div className="col-md-12">
            <div className="col-md-12 row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <Card className="myCard ">
                  <CardBody className=" row">
                    {Inputs}
                    <button class="__button" onClick={this.validateCardCred}>
                      {"Submit"}
                    </button>
                  </CardBody>
                </Card>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>{" "}
        </section>{" "}
      </>
    );
  }
}

export default creditCard;
