orders = [
  {
    id: "12345",
    detail: {
      Chivas: 12,
      Calcu: 6,
      Tarapacá: 12,
      "Grey Goose": 6
    }
  },
  {
    id: "12345",
    detail: {
      Chivas: 14,
      Calcu: 5,
      Tarapacá: 11,
      "Grey Goose": 7
    }
  },
  {
    id: "12346",
    detail: {
      "Valdivieso Brut": 6,
      "Viña Mar Brut": 1,
      Ramazzotti: 1
    }
  },
  {
    id: "12348",
    detail: {
      "Cerveza Ross 500cc": 24,
      "6x Cerveza Hoegaarden en Botellas 330cc": 4
    }
  }
];

products = [
  {
    name: "Chivas",
    unitsPerBox: 12,
    standardMeasure: 1.4
  },
  {
    name: "Calcu",
    unitsPerBox: 6,
    standardMeasure: 1
  },
  {
    name: "Tarapacá",
    unitsPerBox: 12,
    standardMeasure: 1
  },
  {
    name: "Grey Goose",
    unitsPerBox: 6,
    standardMeasure: 1.5
  },
  {
    name: "Valdivieso Brut",
    unitsPerBox: 6,
    standardMeasure: 1.3
  },
  {
    name: "Viña Mar Brut",
    unitsPerBox: 6,
    standardMeasure: 1.2
  },
  {
    name: "Ramazzotti",
    unitsPerBox: 6,
    standardMeasure: 1
  },
  {
    name: "Cerveza Ross 500cc",
    unitsPerBox: 24,
    standardMeasure: 0.5
  },
  {
    name: "6x Cerveza Hoegaarden en Botellas 330cc",
    unitsPerBox: 4,
    standardMeasure: 0.6
  }
];

var standardMeasure = 0;
var unitsPerBox = 0;
let leftOverUnits = 0;

let findProduct = productInput => {
  for (productDetail in products) {
    if (products[productDetail].name === productInput) {
      standardMeasure = products[productDetail].standardMeasure;
      unitsPerBox = products[productDetail].unitsPerBox;
    }
  }
};

for (order in orders) {
  let orderDetail = orders[order].detail;
  console.log("--------------");
  console.log("Orden:", orders[order].id);
  console.log(orderDetail);
  let totalSupplierBoxes = 0;
  let totalOtherBoxes = 0;
  let leftOverUnitsToStandardMeasure = 0;

  for (product in orderDetail) {
    findProduct(product);
    let totalAmount = orderDetail[product];
    console.log(product, totalAmount, unitsPerBox);
    if (totalAmount / unitsPerBox >= 1) {
      totalSupplierBoxes += Math.floor(totalAmount / unitsPerBox);
      leftOverUnits = totalAmount % unitsPerBox;
      leftOverUnitsToStandardMeasure += leftOverUnits * standardMeasure;
    } else {
      leftOverUnits = totalAmount % unitsPerBox;
      leftOverUnitsToStandardMeasure += leftOverUnits * standardMeasure;
    }

    totalOtherBoxes = Math.ceil(leftOverUnitsToStandardMeasure / 12);
    console.log(
      "CP:",
      totalSupplierBoxes,
      "; CO:",
      totalOtherBoxes,
      "; leftOver:",
      leftOverUnitsToStandardMeasure
    );
  }
  console.log(
    "Output final:",
    "CP:",
    totalSupplierBoxes,
    "; CO:",
    totalOtherBoxes
  );
  /*  var orderDetailKeys = Object.keys(orderDetail); */
}
