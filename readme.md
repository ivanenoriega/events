# Eventos.

### Ejercicios basicos

1. Agrega un `eventListener` del tipo `click` a todos los alumnos para que al hacer click en sus nombres se muestre un `alert()` con el siguientte mensaje: "Alumno seleccionado".

2. Agrega un `eventListener` del tipo `click` a todos los mentores y tutores para que al hacer click en sus nombres se muestre un `alert()` con el siguiente mensaje: "Mentor/Tutor seleccionado".

### Ejercicios intermedios

3. En la funcion que ejecutamos al hacer click en los alumnos y mentores agregar al final de el mensaje mostrado en el alert el nombre del respectivo mentor, tutor o alumno. Ej: "Alumno seleccionado: Andres Ferrer". (Pista: este dato lo podemos sacar el `target` del evento, en la propiedad `textContent`: event.target.textContent)

4. En la funcion que ejecutamos al hacer click en los alumnos y mentores cambiar el `background-color` del elemento por `red`. (Pista: esta propiedad se llama `backgroundColor` y esta dentro de `style`, que esta dentro de `target`: event.target.style.backgroundColor)
