        window.addEventListener("load",changeBackground);
        function changeBackground(){
            const listImages=["cataratas.jpg","machu-picchu.jpg","perito_moreno.jpg","roquez.jpg","tatacoa.jpg","titicaca.jpg"];
            const index=Math.floor(Math.random() * listImages.length);
            const selectedImage=listImages[index];
            const imagePath="maxlertcd.github.io/"+selectedImage;
            document.body.style.backgroundImage= `url('${imagePath}')`;
            //mostrar descripcion de la imagen
            const description= getDescription(index);
            document.getElementById("description").textContent=description;
            function getDescription(idx){
                switch (idx){
                    case 0:
                        return"Cataratas del iguazú,argentina";
                    case 1:
                        return"Machu-picchu, Perú";
                    case 2:
                        return"Glaciar Perito Moreno,Argentina";
                    case 3:
                        return"Parque Nacional El Roquez, Venezuela";
                    case 4:
                        return"Desierto dela Tatacaca, colombia";
                    case 5:
                        return"Lago Titicaca,Bolivia";
                    default:
                        return"Destino desconocido";
                }
            }
        }
