import React from 'react';

import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone8-spgray-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795417557"
              alt="Celular"/>
            </td>
            <td>
              <strong>Super celular caro</strong>
              <span>R$ 1295,45=</span>
            </td>
            <td>
              <div>
              <button type="button">
                <MdRemoveCircleOutline size={20}  color="#7159c1" />
              </button>
              <input type="number" readOnly value={2}/>
              <button type="button">
                <MdAddCircleOutline size={20}  color="#7159c1" />
              </button>
              </div>
            </td>
            <td>
              <strong>
                R$258,80
              </strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button"> Finalizar Pedido </button>
        <Total>
          <span>TOTAL</span>
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}
