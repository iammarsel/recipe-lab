import { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = (props) => {
  const [xp, setXP] = useState(0.1);
  const [level, setLevel] = useState(1);
const stringra = "In a large skillet, melt butter over medium heat. Add chopped onion and cook until soft and translucent, about 5 minutes. Add minced garlic, ground coriander, ground cumin, paprika, turmeric, and cayenne pepper (if using) to the skillet. Cook for 1-2 minutes or until fragrant. Add chicken pieces to the skillet and cook until browned on all sides, about 5-7 minutes. Stir in tomato sauce and heavy cream. Bring the mixture to a simmer and let it cook for about 10-15 minutes or until the chicken is fully cooked and the sauce has thickened. Season with salt and pepper to taste. Serve hot, garnished with fresh cilantro leaves. Butter chicken is traditionally served with rice or naan bread.";
  const [all_recipes, setAll] = useState({
    ButterChicken: {ingredients:['Chicken','Rice','Yogurt','Spices'],description:stringra,difficulty:2,completed:false,image:"https://www.danishfoodlovers.com/wp-content/uploads/2022/09/Butter-chicken-3.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1"},
    Plov: {ingredients:['Beef','Rice','Carrots','Garlic'],description:stringra,difficulty:3,completed:false,image:"https://3.bp.blogspot.com/-ifXTd_QKsrU/VHvGNKhpB2I/AAAAAAAADRg/U0FAG3qKa0U/s1600/1071258.jpg"},
    MacAndChesse: {ingredients:['Macaroni','Cheese'],description:stringra,difficulty:1,completed:false,image:"https://www.tastingtable.com/img/gallery/the-15-best-additions-to-mac-and-cheese/l-intro-1670687967.jpg"},
    Pizza: {ingredients:['Chicken','Rice','Yogurt','Spices'],description:stringra,difficulty:2,completed:false,image:"https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVwcGVyb25pJTIwcGl6emF8ZW58MHx8MHx8&w=1000&q=80"},
    Cheeseburger: {ingredients:['Beef','Cheese','Tomato','Lettuce','Onion','Bread'],description:stringra,difficulty:2,completed:false,image:"https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/4NIX5ZMIWJEMPFNYBF3HNG575I.png"},
    ChickenAndRice:{ingredients:['Chicken','Rice'],description:stringra,difficulty:1,completed:false,image:"https://www.cookingclassy.com/wp-content/uploads/2020/01/chicken-and-rice-15.jpg"}
  });
  const [sorted_recipes, setSorted] = useState({});
  const [fav_recipes, setFav] = useState({});
  const [current_recipe,setCurrent] = useState({});


  // Function to add a new key-value pair to the object
  const addFav = (key, value) => {
    setFav({ ...fav_recipes, [key]: value });
  }
  const sortRecipes = (ingredients) => {
    Object.keys(all_recipes).map((item, index) => {
      for (let i = 0; i < ingredients.length; i++) {
        if (ingredients[i] in all_recipes[item].ingredients){
          console.log('hi')
          addSorted(item,all_recipes[item]);
          break;
        }
      };
    });
  }
  // Function to remove a key-value pair from the object
  const removeFav = (key) => {
    const fav_recipes = { ...fav_recipes };
    delete fav_recipes[key];
    setFav(fav_recipes);
  }

   // Function to add a new key-value pair to the object
   const addSorted = (key, value) => {
    setSorted({ ...sorted_recipes, [key]: value });
  }

  // Function to remove a key-value pair from the object
  const removeSorted = (key) => {
    const sorted_recipes = { ...sorted_recipes };
    delete sorted_recipes[key];
    setSorted(fav_recipes);
  }


  const contextValue = { xp, setXP, level, setLevel, all_recipes, setAll,sorted_recipes, sortRecipes, addSorted,removeSorted,fav_recipes, addFav,removeFav,current_recipe,setCurrent };
  
  return (
    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  );
};