const btnMostrar = document.querySelector(".mostrar");
const btnMapear = document.querySelector(".mapear");
const btnFiltrar = document.querySelector(".filtrar");
const btnSomar = document.querySelector(".somar");
const products = document.querySelector(".products");

const formatCurrency = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

let product = "";

const mostrar = (array) => {
  product = "";
  array.forEach((item) => {
    product += `
          <li class="item">
            <img
              class="item-image"
              src=${item.src}
              alt="Imagem do produto"
            />
            <p class="item-name">${item.name}</p>
            <p class="item-price">${formatCurrency(item.price)}</p>
          </li>
`;
  });

  products.innerHTML = product;
};

const mapear = () => {
  const newPrice = menuOptions.map((item) => {
    return {
      ...item,
      price: item.price - item.price / 10,
    };
  });

  mostrar(newPrice);
};

const filtrar = () => {
  const onlyVegan = menuOptions.filter((item) => {
    return item.vegan === true;
  });

  mostrar(onlyVegan);
};

const somar = () => {
  const sum = menuOptions.reduce((acumulador, valorAtual) => {
    return (acumulador += valorAtual.price);
  }, 0);

  product = `
          <li class="item">
            <p class="item-name">O valor da soma dos itens do menu sem desconto é de 
            ${formatCurrency(sum)}</p>
          </li>  
  `;

  products.innerHTML = product;
};

btnMostrar.addEventListener("click", () => mostrar(menuOptions));
btnMapear.addEventListener("click", mapear);
btnFiltrar.addEventListener("click", filtrar);
btnSomar.addEventListener("click", somar);
