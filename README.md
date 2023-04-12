Snap in React

Goal

The goal is to created snap application where can search some photos. 

npm start

I created react app with name snap and started my project with npm start.

I created new folder componets where I created App file where I had state for searchTerm with default value of empty marks and that state added as props in the child componet. I also here created Router with all Route which had to show pictures od mountain, beaches, birds and food.

I created Header file where I had title for this project and here I had state images and search=useImages with default value od array. I created SearchBar where I had form tag-for that I created onSubmitHandler function with some code and had input field with value and onChange- for that I used arrow function with some code. In this file I also had button with onClick-for that I created onClickHandler function with some code, that button used icon. This file I imported in Header file.

I created Body file where I had Link for mountain, beach, food and birds, they had to show us pictures. Inside that link I had buttons for every button I created different onClick function with different code which should show images when clicked on them. This file I imported in Header file. 

I created ImagesList file where I had to show pictures, for that I used map statement and I created ImageCard file with state spans with default value od zero and here I also created image ref=use ref and that I used in useEffect where I decided to show ten pictures. That file I imported in Header file.

I created useImages file where I had state images with default value of empty array, and here I did fetch api using unsplash-for that I created new folder api with unsplash file where I had basic url headers and authorization. This file I imported in Header file.

I also created new folder route where I had file for Beaches, Birds, Mountain and Food.
I created imageList.css for stayling this application. 