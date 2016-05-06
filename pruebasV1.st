	poblacion := Poblacion new.
	cromosoma1 := Cromosoma new.
	cromosoma1 genes add: (Gen new: #(1 0 1 0 0 1)). " gen caracteristicas "
	cromosoma1 genes add: (Gen new: #(1 0 0 0 1 0)).
	cromosoma1 genes add: (Gen new: #(0 0 0 0 1 1)).
	cromosoma2 := Cromosoma new.
	cromosoma2 genes add: (Gen new: #(1 1 1 1 0 0)).
	cromosoma2 genes add: (Gen new: #(0 1 1 0 1 1)).
	cromosoma2 genes add: (Gen new: #(1 1 1 1 1 1)).
	poblacion cromosomas add: cromosoma1.
	poblacion cromosomas add: cromosoma2.
	ag:= Ag new.
	ag aptitud aptitud: cromosoma1.
	ag aptitud aptitud: cromosoma2.
	poblacion mutate. " funciona con arrays de en serio" 
	
	torneo poblacion: poblacion.
	torneo seleccionar

	"Prueba para obtener un gen"
	poblacion cromosomas first genes first posicion at:0.

ShellAgPresenter showOn: ag.
ag guardarPoblacion.

| r s |

r := Random new.
 (r next * 10) rounded.

(Association key: ('Dificil') value: #(1 1) ).