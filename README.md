# Neoshop

En este documento se explicará el objetivo que buscamos para desarrollar esta prueba técnica satisfactoriamente.

Para empezar, deberás descargarte el contenido de este repositorio utilizando GIT o de la manera que creas más conveniente.

Para entregarlo, pásanos un repositorio en GitLab, GitHub o tu propio servidor o envíanoslo por correo electrónico con todas las instrucciones que necesitamos para montarlo en nuestro propio servidor y ver el resultado.

## Requisitos técnicos

* Un servidor con PHP 7.0 o superior
    * [XAMP para Windows y Mac](https://www.apachefriends.org/es/index.html).
* Compilador de [Sass](https://sass-lang.com/).
    * En [Visual Studio Code](https://code.visualstudio.com/) puedes utilizar [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass).
    * En [Sublime Text](https://www.sublimetext.com/) puedes utilizar [SCSS Compiler](https://packagecontrol.io/packages/SCSS%20Compiler).
    * En cualquier caso, se puede utilizar la propia [herramienta en línea de comandos](https://sass-lang.com/install).

## Se valorará positivamente

Todas estas directrices son una *wishlist* de lo que nos gustaría que hicieses a la hora de desarrollar la prueba técnica, ya que esto tendrás que aplicarlo en el día a día en Neozink.

* Código limpio, sencillo, ordenado y comentado.
* Metodologías de CSS: [BEM](http://getbem.com/), [OCSS](http://oocss.org/), [SMACSS](http://smacss.com/), etc. El código de ejemplo utiliza BEM.
* Componentización en todos los niveles: HTML (PHP), CSS y JS.
    * Es decir, que el código sea lo más modular posible, las reglas de CSS no se *peguen* unas con otras, el código de cada componente esté en un fichero independiente, etc.
    * [DRY](https://es.wikipedia.org/wiki/No_te_repitas): no repetir código de manera innecesaria.
* [DIY](https://es.wikipedia.org/wiki/H%C3%A1galo_usted_mismo): todos sabemos integrar soluciones ya desarrolladas, pero el objetivo de este ejercicio es ver como te desenvuelves teniendo que desarrollar algo desde cero.
* Utilización de las tecnologías más modernas que existan y sean [compatibles con la mayoría de los navegadores](https://caniuse.com/):
    * CSS Custom Properties
    * Grid y Flex
    * ECMAScript 6
    * ...
* Desarrollo de efectos y animaciones "modernas" al cargar algunos elementos en la página, al hacer `hover` sobre los botones, al mover las slides, etc. Puedes buscar *inspiración* en Codepen.
* Cualquier otra cosa que nos pueda sorprender. Tienes total libertad :).
* Si utilizas GIT para el desarrollo de este proyecto, se valorará la calidad de los comentarios de cada `commmit` que hagas.

## ¿Qué hay que hacer?

El objetivo del ejercicio es el siguiente:

* Desarrollar un slider o pase de diapositivas para la cabecera. Idealmente con pase automático cada X segundos y pase manual con botones.
* Desarrollar un layout de productos para la parte inferior utilizando tecnologías de CSS modernas como Grid o Flex.
    * Existen dos banners o CTAs en este layout que deberán colocarse en la quinta y novena posición ocupando el doble de ancho que el resto de elementos del layout.
* Obtener la información para el slider y los productos de dos ficheros en JSON que nos servirá a modo de simulación de base de datos o API.
* Toda la página debe ser completamente responsiva y deberá verse correctamente, al menos, en las siguientes resoluciones de pantalla:
    * 1920px de ancho (FullHD)
    * 1440px de ancho (HiDPI screen)
    * 1366px de ancho (iPad Pro landscape)
    * 1280px de ancho (MDPI screen)
    * 1024px de ancho (iPad landscape)
    * 768px de ancho (iPad portrait, Tablet portrait)
    * 480px de ancho (Smartphone)
    * 375px de ancho (Smartphone)

> **NOTA**: no es necesario desarrollar una `media query` para cada resolución, simplemente hay que asegurarse que se vea correctamente en todos los dispositivos descritos.

## ¿Qué se proporciona?

* Dos capturas de cómo nos gustaría que quedase el diseño final de la página aproximadamente. Las encontrarás en `resources/docs`.
    * [Captura 1](resources/docs/screenshot1.png)
    * [Captura 2](resources/docs/screenshot2.png)
* Un esqueleto con el código principal de la página y unos comentarios donde queremos que desarrolles la funcionalidad pedida. Los comentarios van precedidos de un `TODO:` para que te sea sencillo buscarlos e identificarlos.
* Todos los recursos gráficos (imágenes) que vas a necesitar para desarrollar el diseño.
* La librería Fontawesome para algunos iconos utilizados en la página.
* La librería jQuery para que la utilices en tu Javascript si lo ves necesario.
* Un esqueleto básico de SASS.
* Un esqueleto básico de HTML.
* Un esqueleto básico de PHP para configuración y plantillas.

## Bonus

Si te ves con ganas (y tiempo), puedes desarrollar alguna funcionalidad adicional de entre las que te proponemos o cualquiera que consideres, siempre que la documentes correctamente y sigas las pautas que te hemos comentado.

La funcionalidad propuesta es la siguiente:

Para simular una carga de productos *infinita*, te proponemos que, al llegar a la parte inferior del mosaico de productos, ya sea cuando se hace scroll o cuando se pinche un botón de "Cargar más productos", se vuelvan a cargar los mismos productos con sus CTAs colocados de la misma manera que comentábamos más arriba, obteniéndolos del fichero JSON correspondiente y utilizando una petición Ajax a un controlador en PHP que te devuelva la información.

No vale cargar el fichero JSON directamente desde Javascript. Queremos que hagas una petición Ajax a un controlador en PHP que lea el fichero en JSON, lo procese si lo ves necesario, y devuelva una respuesta con la que luego se pintará la información en el DOM.

Recuerda utilizar tecnologías modernas de Javascript: promises, callbacks, etc.

## Consideraciones

* El ejercicio está pensado para que toques de manera somera todas las tecnologías que utilizamos en Neozink cada día para trabajar.
* No es necesario echar demasiado tiempo en desarrollar lo que se pide. Buscamos sencillez y claridad.
* Se puede utilizar cualquier framework que se desee, siempre que sea con sentido.
* Tienes total libertad, puedes desarrollar cualquier cosa adicional que consideres que puede mostrar tus habilidades, sin necesidad de pasarse :).

Te agradecemos mucho el tiempo que vas a invertir en esta prueba. Queremos que sea lo más parecida a cualquier día en Neozink y sepas a qué tipo de cosas te puedes enfrentar.

¡Mucha suerte!
