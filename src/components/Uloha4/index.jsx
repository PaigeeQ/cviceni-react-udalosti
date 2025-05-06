/*
Zadání 1: Pomocí události `change` a vlastnosti `event.target.value` vypisujte do konzole, co
  postupně uživatel do inputu píše ve formátu
  console.log('Uživatel napsal: ' + DOPLŇ_TEXT_OD_UŽIVATELE).
Zadání 2: Pokud uživatel z textového políčka vše smaže, vypište „Uživatel nenapsal nic“.
*/

export const Uloha4 = () => {
  const handleClick = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length > 0) {
      console.log("Uživatel napsal: " + inputValue);
    } else { 
      console.log("Uživtel nenapsal nic");
    }
  };

  return <input type="text" onChange={handleClick} />;
};
