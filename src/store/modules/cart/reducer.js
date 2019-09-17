import produce from 'immer';

export default function cart(state = [], action){
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id)
        if(productIndex >= 0){
          draft[productIndex].amount += 1;
        }else{
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if(productIndex >= 0){
          draft.splice(productIndex, 1);
        }
      });

      case '@cart/UPDATE_AMOUNT': {
        const itemAmount = action.amount; // Pegando a quantidade atual do amount

        if(itemAmount <= 0){ //Verificando se a quantidade é menor ou igual a 0
          return state;
        } else{
          return produce(state, draft => {
            const productIndex = draft.findIndex(p => p.id === action.id);
  
            if(productIndex >= 0){
              draft[productIndex].amount = Number(itemAmount)
            }
          });
        };
      }


    default:
      return state;
  }
}
