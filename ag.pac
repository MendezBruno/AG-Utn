| package |
package := Package name: 'ag'.
package paxVersion: 1;
	basicComment: ''.


package classNames
	add: #Ag;
	add: #Aptitud;
	add: #AptitudBooleanTrue;
	add: #AptitudEstrategy;
	add: #AptitudSuperposicion;
	add: #AptitudValoracion;
	add: #Cromosoma;
	add: #CruzamientoSimple;
	add: #CruzamientoStrategy;
	add: #Gen;
	add: #MutacionEstrategy;
	add: #Poblacion;
	add: #SeleccionStrategy;
	add: #Torneo;
	yourself.

package binaryGlobalNames: (Set new
	yourself).

package globalAliases: (Set new
	yourself).

package setPrerequisites: (IdentitySet new
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\Base\Dolphin';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Contributions\ITC Gorisek\OmniBase';
	yourself).

package!

"Class Definitions"!

Model subclass: #Ag
	instanceVariableNames: 'poblacionInicial poblacionCruzada poblacion_seleccionada poblacionMundial poblacionRestante mutacion cruzamiento seleccion aptitud'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Model subclass: #Aptitud
	instanceVariableNames: 'dicDeFunciones'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Model subclass: #AptitudBooleanTrue
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Model subclass: #AptitudEstrategy
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Model subclass: #AptitudSuperposicion
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Model subclass: #AptitudValoracion
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Model subclass: #Cromosoma
	instanceVariableNames: 'nombre genes aptitud'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Model subclass: #CruzamientoStrategy
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Model subclass: #Gen
	instanceVariableNames: 'nombre dificultad dia final posicion'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Model subclass: #MutacionEstrategy
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Model subclass: #Poblacion
	instanceVariableNames: 'cromosomas'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Model subclass: #SeleccionStrategy
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
CruzamientoStrategy subclass: #CruzamientoSimple
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
SeleccionStrategy subclass: #Torneo
	instanceVariableNames: 'poblacion'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

"Global Aliases"!


"Loose Methods"!

"End of package definition"!

"Source Globals"!

"Classes"!

Ag guid: (GUID fromString: '{0418FE3E-735A-4CA4-8089-1D862A0B4BD0}')!
Ag comment: ''!
!Ag categoriesForClass!Unclassified! !
!Ag methodsFor!

agregarGen: unGen
	self poblacionMundial add: unGen.
	self guardarPoblacion.!

aptitud
	^aptitud!

aptitud: anObject
	aptitud := anObject!

buscarGen: unGen
^poblacionMundial detect: [:each | (self convertir_a_decimal: each posicion) =  (self convertir_a_decimal: unGen posicion) ]!

calcularAptitudDeNuevaPoblacionInicial
	"calcular la aptitud de la funcion cruzada, teniendo en cuenta que hay materia que puede no existir"

	self revisarGenesDePoblacionInicial.
	poblacionInicial do: [:cromo | cromo revisarExitenciaDeMaterias: self].
	self calcularAptitudDePoblacionInicial!

calcularAptitudDePoblacionInicial
	poblacionInicial do: [:cromo | cromo aptitud: cromo aptitud + (self aptitud aptitud: cromo)]!

cargarPoblacion
	| fileIn byteArray |
	fileIn := FileStream read: 'C:\Users\bruno\Desktop\poblacion'.
	byteArray := fileIn collection asByteArray.
	poblacionMundial := ODBDeserializer deserializeFromBytes: byteArray!

convertir_a_decimal: unArray
	| iteracion acum |
	iteracion := 0.
	acum := 0.
	unArray do: 
			[:unValor |
			unValor = 1 ifTrue: [acum := acum + (2 ** iteracion)].
			iteracion := iteracion + 1].
	^acum!

crearGen: unNombre
	| gen |
	gen := Gen new: (Array new: 6).
	gen nombre: unNombre.
	^gen!

cruzamiento
	seleccion class = Torneo
		ifTrue: [ poblacionCruzada := cruzamiento cruzarResTorneo: poblacion_seleccionada].
!

cruzamiento: anObject
	cruzamiento := anObject!

dameUnCromosoma
	| cromosoma gen |
	cromosoma := Cromosoma new.
	3 timesRepeat: 
			[gen := self dameUnGen.
			cromosoma genes add: gen.
			poblacionRestante remove: gen].
	^cromosoma!

dameUnGen
	| random num |
	num := self numNoCero: poblacionRestante size.
	^poblacionRestante at: num!

dameUnGenNoRepetido: unCromosoma
	| random num |
	num := self numNoCero: poblacionMundial size.
	[unCromosoma genes includes: (poblacionMundial at: num)]
		whileTrue: [num := self numNoCero: poblacionMundial size].
	^poblacionMundial at: num!

existeGen: unGen
^poblacionMundial anySatisfy: [:each | (self convertir_a_decimal: each posicion) =  (self convertir_a_decimal: unGen posicion) ]!

generanPoblacionInicial
	self poblacionRestante addAll: poblacionMundial.
	5 timesRepeat: 
			[poblacionInicial add: self dameUnCromosoma.
			self poblacionRestante addAll: poblacionMundial]!

generanPoblacionInicial: unNumero
	unNumero timesRepeat: 
			[self poblacionRestante addAll: poblacionMundial.
			poblacionInicial add: self dameUnCromosoma].
	self calcularAptitudDePoblacionInicial!

guardarPoblacion
	| fileOut |
	(File exists: 'poblacion')
		ifTrue: 
			[fileOut := FileStream write: 'poblacion'.
			fileOut nextPutAll: (ODBSerializer serializeToBytes: self poblacionMundial).
			fileOut
				flush;
				close]
		ifFalse: 
			[fileOut := FileStream write: 'poblacion'.
			fileOut nextPutAll: (ODBSerializer serializeToBytes: self poblacionMundial).
			fileOut
				flush;
				close]!

initialize
	self aptitud: Aptitud new.
	self seleccion: Torneo new.
	self cruzamiento: CruzamientoSimple new.
	self poblacionMundial: OrderedCollection new.
	self poblacionInicial: OrderedCollection new.
	self poblacionRestante: OrderedCollection new!

mutacion
	| rGenerator rCromo rGen rPosicion |
	rGenerator := Random new.
	rCromo := (rGenerator next * (self poblacionCruzada size - 1)) rounded + 1.
	rGen := (rGenerator next * 2) rounded + 1.
	rPosicion := (rGenerator next * 5) rounded + 1.
	(((self poblacionCruzada at: rCromo) genes at: rGen) posicion at: rPosicion) = 1
		ifTrue: [((self poblacionCruzada at: rCromo) genes at: rGen) posicion at: rPosicion put: 0]
		ifFalse: [((self poblacionCruzada at: rCromo) genes at: rGen) posicion at: rPosicion put: 1]!

mutacion: anObject
	mutacion := anObject!

mutacionConProbabilidad: unaProbabilidad
	| rGenerator |
	rGenerator := Random new.
	(rGenerator next * 100) rounded < unaProbabilidad ifTrue: [self mutacion]!

numNoCero: unNum
	| random num |
	num := 0.
	[num = 0] whileTrue: 
			[random := Random new.
			num := (random next * (unNum - 1)) rounded + 1].
	^num!

poblacion_seleccionada
	^poblacion_seleccionada!

poblacion_seleccionada: anObject
	poblacion_seleccionada := anObject!

poblacionCruzada
	^poblacionCruzada!

poblacionCruzada: anObject
	poblacionCruzada := anObject!

poblacionInicial
	^poblacionInicial!

poblacionInicial: anObject
	poblacionInicial := anObject!

poblacionMundial
	^poblacionMundial!

poblacionMundial: anObject
	poblacionMundial := anObject!

poblacionRestante
	^poblacionRestante!

poblacionRestante: anObject
	poblacionRestante := anObject!

revisarGenesDePoblacionInicial
	"revisa que los datos de los genes sean correctos producto de la mutacion y o cruzamiento "

	| cromoAuxiliar nuevaPoblacion |
	nuevaPoblacion := OrderedCollection new.
	poblacionInicial do: 
			[:cromosoma |
			cromoAuxiliar := Cromosoma new.
			cromosoma genes do: 
					[:gen |
					(self existeGen: gen)
						ifTrue: [cromoAuxiliar genes add: (self buscarGen: gen)]
						ifFalse: [cromoAuxiliar genes add: gen]].
			nuevaPoblacion add: cromoAuxiliar].
	self poblacionInicial: nuevaPoblacion!

seleccion
	self poblacion_seleccionada: (seleccion seleccion: poblacionInicial)!

seleccion: anObject
	seleccion := anObject! !
!Ag categoriesFor: #agregarGen:!public! !
!Ag categoriesFor: #aptitud!accessing!public! !
!Ag categoriesFor: #aptitud:!accessing!public! !
!Ag categoriesFor: #buscarGen:!public! !
!Ag categoriesFor: #calcularAptitudDeNuevaPoblacionInicial!public! !
!Ag categoriesFor: #calcularAptitudDePoblacionInicial!public! !
!Ag categoriesFor: #cargarPoblacion!public! !
!Ag categoriesFor: #convertir_a_decimal:!public! !
!Ag categoriesFor: #crearGen:!public! !
!Ag categoriesFor: #cruzamiento!accessing!public! !
!Ag categoriesFor: #cruzamiento:!accessing!public! !
!Ag categoriesFor: #dameUnCromosoma!public! !
!Ag categoriesFor: #dameUnGen!public! !
!Ag categoriesFor: #dameUnGenNoRepetido:!public! !
!Ag categoriesFor: #existeGen:!public! !
!Ag categoriesFor: #generanPoblacionInicial!public! !
!Ag categoriesFor: #generanPoblacionInicial:!public! !
!Ag categoriesFor: #guardarPoblacion!public! !
!Ag categoriesFor: #initialize!public! !
!Ag categoriesFor: #mutacion!accessing!public! !
!Ag categoriesFor: #mutacion:!accessing!public! !
!Ag categoriesFor: #mutacionConProbabilidad:!public! !
!Ag categoriesFor: #numNoCero:!public! !
!Ag categoriesFor: #poblacion_seleccionada!accessing!public! !
!Ag categoriesFor: #poblacion_seleccionada:!accessing!public! !
!Ag categoriesFor: #poblacionCruzada!accessing!private! !
!Ag categoriesFor: #poblacionCruzada:!accessing!private! !
!Ag categoriesFor: #poblacionInicial!accessing!public! !
!Ag categoriesFor: #poblacionInicial:!accessing!public! !
!Ag categoriesFor: #poblacionMundial!accessing!private! !
!Ag categoriesFor: #poblacionMundial:!accessing!private! !
!Ag categoriesFor: #poblacionRestante!accessing!public! !
!Ag categoriesFor: #poblacionRestante:!accessing!public! !
!Ag categoriesFor: #revisarGenesDePoblacionInicial!public! !
!Ag categoriesFor: #seleccion!accessing!public! !
!Ag categoriesFor: #seleccion:!accessing!public! !

!Ag class methodsFor!

new
	^super new initialize
! !
!Ag class categoriesFor: #new!public! !

Aptitud guid: (GUID fromString: '{8AC60A11-E710-4988-8D36-E944B7CB5A46}')!
Aptitud comment: 'Calcula la funcion de aptitud de los cromsomas tieendo en cuenta los datos de su diccionario'!
!Aptitud categoriesForClass!MVP-Models! !
!Aptitud methodsFor!

aptitud: unCromosoma
" 1 define la aptitud de final
  2 define la aptitud de dificultad 
  3 define la aptitud de el dia de la materia"

	^((self dicDeFunciones at: 1) aptitudDe: (unCromosoma dameTusCaracteristicasDesde: 1 a: 1))
		+ ((self dicDeFunciones at: 2) aptitudDe: (unCromosoma dameTusCaracteristicasDesde: 2 a: 3))
			+ ((self dicDeFunciones at: 4) aptitudDe: (unCromosoma dameTusCaracteristicasDesde: 4 a: 6))!

definirFunciones

	self dicDeFunciones: Dictionary new.
	dicDeFunciones at: 1 put: (AptitudBooleanTrue new).
	dicDeFunciones at: 2 put: (AptitudValoracion new).
	dicDeFunciones at: 4 put: (AptitudSuperposicion new).!

dicDeFunciones
	^dicDeFunciones!

dicDeFunciones: anObject
	dicDeFunciones := anObject!

initialize
	self definirFunciones! !
!Aptitud categoriesFor: #aptitud:!public! !
!Aptitud categoriesFor: #definirFunciones!public! !
!Aptitud categoriesFor: #dicDeFunciones!accessing!private! !
!Aptitud categoriesFor: #dicDeFunciones:!accessing!private! !
!Aptitud categoriesFor: #initialize!public! !

!Aptitud class methodsFor!

new
	^super new initialize! !
!Aptitud class categoriesFor: #new!public! !

AptitudBooleanTrue guid: (GUID fromString: '{E1972F12-E1FB-413D-BA12-B84394E7A069}')!
AptitudBooleanTrue comment: ''!
!AptitudBooleanTrue categoriesForClass!MVP-Models! !
!AptitudBooleanTrue methodsFor!

aptitudDe: listaGenes
	| acum |
	acum:=0.
	listaGenes do: [:gen | (gen includes: 0) ifTrue: [acum := acum - 50] ifFalse: [acum := acum + 100]].
	^acum! !
!AptitudBooleanTrue categoriesFor: #aptitudDe:!public! !

!AptitudBooleanTrue class methodsFor!

aptitudDe: listaGenes
	| acum |
	acum:=0.
	listaGenes do: [:gen | (gen includes: 1) ifTrue: [acum := acum - 50] ifFalse: [acum := acum + 100]].
	^acum! !
!AptitudBooleanTrue class categoriesFor: #aptitudDe:!public! !

AptitudEstrategy guid: (GUID fromString: '{97B8C90B-9B34-4447-AC5E-4449677598AA}')!
AptitudEstrategy comment: ''!
!AptitudEstrategy categoriesForClass!Unclassified! !
AptitudSuperposicion guid: (GUID fromString: '{80BA86AB-DFA6-4F06-BC41-EAEF711C1C81}')!
AptitudSuperposicion comment: ''!
!AptitudSuperposicion categoriesForClass!MVP-Models! !
!AptitudSuperposicion methodsFor!

aptitudDe: listaGenes
"recibe los genes correspondientes a los dias de la semana"
	^(self genesIguales: listaGenes) * -125!

convertir_a_decimal: unArray
	| iteracion acum |
	iteracion := 0.
	acum := 0.
	unArray do: 
			[:unValor |
			unValor = 1 ifTrue: [acum := acum + (2 ** iteracion)].
			iteracion := iteracion + 1].
	^acum!

genesIguales: listaGenes
	"los genes corresponden a los ultimas tres posiciones de cada materia"

	| listaNumeros |
	listaNumeros := OrderedCollection new.
	listaGenes do: [:gen | listaNumeros add: (self convertir_a_decimal: gen)].
	^listaNumeros size - listaNumeros asSet size! !
!AptitudSuperposicion categoriesFor: #aptitudDe:!public! !
!AptitudSuperposicion categoriesFor: #convertir_a_decimal:!public! !
!AptitudSuperposicion categoriesFor: #genesIguales:!public! !

!AptitudSuperposicion class methodsFor!

aptitudDe: listaGenes
^(self genesIguales:listaGenes)*-125


!

convertir_a_decimal: unArray
	| iteracion acum |
	iteracion := 0.
	acum := 0.
	unArray do: 
			[:unValor |
			unValor = 1 ifTrue: [acum := acum + (2 ** iteracion)].
			iteracion := iteracion + 1].
	^acum!

genesIguales:listaGenes
|listaNumeros |
listaNumeros:= OrderedCollection new.
listaGenes do:[:gen| listaNumeros add: ( self convertir_a_decimal:gen)].
^(listaNumeros size)- (listaNumeros asSet size)
! !
!AptitudSuperposicion class categoriesFor: #aptitudDe:!public! !
!AptitudSuperposicion class categoriesFor: #convertir_a_decimal:!public! !
!AptitudSuperposicion class categoriesFor: #genesIguales:!public! !

AptitudValoracion guid: (GUID fromString: '{739A3F71-BF23-494C-9922-7A57F172BD1A}')!
AptitudValoracion comment: ''!
!AptitudValoracion categoriesForClass!MVP-Models! !
!AptitudValoracion methodsFor!

aptitudDe: listaGenes
	| acum |
	acum := 0.
	listaGenes do: [:gen |acum := acum + (self convertir_a_decimal: gen)].
	^acum * -50!

convertir_a_decimal: unArray
	| iteracion acum |
	iteracion := 0.
	acum := 0.
	unArray do: 
			[:unValor |
			unValor = 1 ifTrue: [acum := acum + (2 ** iteracion)].
			iteracion := iteracion + 1].
	^acum! !
!AptitudValoracion categoriesFor: #aptitudDe:!public! !
!AptitudValoracion categoriesFor: #convertir_a_decimal:!public! !

!AptitudValoracion class methodsFor!

aptitudDe: listaGenes
	| acum |
	acum := 0.
	listaGenes do: [:gen | acum := acum + (self convertir_a_decimal: gen)].
	^acum * 50!

convertir_a_decimal: unArray
	| iteracion acum |
	iteracion := 0.
	acum := 0.
	unArray do: 
			[:unValor |
			unValor = 1 ifTrue: [acum := acum + (2 ** iteracion)].
			iteracion := iteracion + 1].
	^acum! !
!AptitudValoracion class categoriesFor: #aptitudDe:!public! !
!AptitudValoracion class categoriesFor: #convertir_a_decimal:!public! !

Cromosoma guid: (GUID fromString: '{A176475E-F6E0-43D0-BF7F-1D2D90E925A1}')!
Cromosoma comment: ''!
!Cromosoma categoriesForClass!Unclassified! !
!Cromosoma methodsFor!

aptitud
	^aptitud!

aptitud: anObject
	aptitud := anObject!

dameTusCaracteristicasDesde: start a: stop
	| listaGenes |
	listaGenes := OrderedCollection new.
	genes do: [:gen| listaGenes add: (gen posicion copyFrom: start to: stop)].
	^listaGenes!

genes
	^genes!

genes: anObject
	genes := anObject!

initialize
	self genes: OrderedCollection new.
	self aptitud: 0!

nombre
	^nombre!

nombre: anObject
	nombre := anObject!

revisarExitenciaDeMaterias: unAg
	"si alguno satisface que no existe y entonces asi la desestima"

	(self genes anySatisfy: [:gen | (unAg existeGen: gen) not])
		ifTrue: [self aptitud: self aptitud - 2000]! !
!Cromosoma categoriesFor: #aptitud!public! !
!Cromosoma categoriesFor: #aptitud:!public! !
!Cromosoma categoriesFor: #dameTusCaracteristicasDesde:a:!public! !
!Cromosoma categoriesFor: #genes!public! !
!Cromosoma categoriesFor: #genes:!accessing!public! !
!Cromosoma categoriesFor: #initialize!public! !
!Cromosoma categoriesFor: #nombre!accessing!public! !
!Cromosoma categoriesFor: #nombre:!accessing!public! !
!Cromosoma categoriesFor: #revisarExitenciaDeMaterias:!public! !

!Cromosoma class methodsFor!

new
	^super new initialize
! !
!Cromosoma class categoriesFor: #new!public! !

CruzamientoStrategy guid: (GUID fromString: '{83E98813-6E16-4E1A-84FC-AC76A766A268}')!
CruzamientoStrategy comment: ''!
!CruzamientoStrategy categoriesForClass!Unclassified! !
Gen guid: (GUID fromString: '{81058575-B619-4315-AF48-DDD1A55C3CA6}')!
Gen comment: 'Esta Clase se usa para definir cada gen que compondran los cromosomas.'!
!Gen categoriesForClass!Unclassified! !
!Gen methodsFor!

dia
	^dia!

dia: anObject
	dia := anObject!

diaSemana: unArray tipo: unTipo
	self posicion at:4 put: (unArray at: 1).
	self posicion at:5 put: (unArray at: 2).
	self posicion at:6 put: (unArray at: 3).
	self dia: unTipo!

dificultad
	^dificultad!

dificultad: anObject
	dificultad := anObject!

dificultad:unArray tipo: unTipo
	self posicion at:2 put: (unArray at: 1).
	self posicion at:3 put: (unArray at: 2).
	self dificultad: unTipo.
	!

displayString
	^self nombre!

final
	^final!

final: anObject
	final := anObject!

nombre
	^nombre!

nombre: anObject
	"Set the value of the receiver's 'nombre' instance variable to the argument."

	nombre := anObject!

posicion
	"Answer the value of the receiver's 'posicion' instance variable."

	^posicion!

posicion: anObject
	"Set the value of the receiver's 'posicion' instance variable to the argument."

	posicion := anObject!

tieneFinal: aBoolean
	aBoolean
		ifTrue: 
			[self posicion at: 1 put: 0.
			self final: 'si']
		ifFalse:[self posicion at: 1 put: 1.
			self final: 'no']! !
!Gen categoriesFor: #dia!accessing!public! !
!Gen categoriesFor: #dia:!accessing!public! !
!Gen categoriesFor: #diaSemana:tipo:!public! !
!Gen categoriesFor: #dificultad!accessing!public! !
!Gen categoriesFor: #dificultad:!accessing!public! !
!Gen categoriesFor: #dificultad:tipo:!public! !
!Gen categoriesFor: #displayString!public! !
!Gen categoriesFor: #final!accessing!public! !
!Gen categoriesFor: #final:!accessing!public! !
!Gen categoriesFor: #nombre!public! !
!Gen categoriesFor: #nombre:!accessing!public! !
!Gen categoriesFor: #posicion!accessing!public! !
!Gen categoriesFor: #posicion:!accessing!public! !
!Gen categoriesFor: #tieneFinal:!public! !

!Gen class methodsFor!

new: unArray
	|gen|
	gen:= self new.
	gen posicion: unArray.
	^gen!

nombre
^self nombre! !
!Gen class categoriesFor: #new:!public! !
!Gen class categoriesFor: #nombre!public! !

MutacionEstrategy guid: (GUID fromString: '{0EDDE7A8-F69A-495C-8B62-ACB0B6E8A9E2}')!
MutacionEstrategy comment: ''!
!MutacionEstrategy categoriesForClass!Unclassified! !
Poblacion guid: (GUID fromString: '{6E45A802-A093-41B1-92E1-195D13E10CB8}')!
Poblacion comment: ''!
!Poblacion categoriesForClass!MVP-Models! !
!Poblacion methodsFor!

cromosomas
	^cromosomas!

cromosomas: anObject
	cromosomas := anObject!

initialize
	self cromosomas: OrderedCollection new.!

mutate
	| rGenerator rCromo rGen rPosicion |
	rGenerator := Random new.
	rCromo := (rGenerator next * (cromosomas size - 1)) rounded + 1.
	rGen := (rGenerator next * 2) rounded + 1.
	rPosicion := (rGenerator next * 5) rounded + 1.
	(((self cromosomas at: rCromo) genes at: rGen) posicion at: rPosicion) = 1
		ifTrue: [((self cromosomas at: rCromo) genes at: rGen) posicion at: rPosicion put: 0]
		ifFalse: [((self cromosomas at: rCromo) genes at: rGen) posicion at: rPosicion put: 1]! !
!Poblacion categoriesFor: #cromosomas!accessing!public! !
!Poblacion categoriesFor: #cromosomas:!accessing!public! !
!Poblacion categoriesFor: #initialize!public! !
!Poblacion categoriesFor: #mutate!accessing!public! !

!Poblacion class methodsFor!

new
	^super new initialize! !
!Poblacion class categoriesFor: #new!public! !

SeleccionStrategy guid: (GUID fromString: '{4EA18C78-4D96-4BF2-8C05-9F90FF393783}')!
SeleccionStrategy comment: ''!
!SeleccionStrategy categoriesForClass!MVP-Models! !
CruzamientoSimple guid: (GUID fromString: '{335521A3-1182-45AC-867E-2A0694C1E1EA}')!
CruzamientoSimple comment: ''!
!CruzamientoSimple categoriesForClass!Unclassified! !
!CruzamientoSimple methodsFor!

cruzaImparUna: unaPoblacion conCantidad: unaCantidad
	| iteracion |
	self cruzarCromosoma: unaPoblacion first y: unaPoblacion first.
	iteracion := 2.
	unaCantidad timesRepeat: 
			[self cruzarCromosoma: (unaPoblacion at: iteracion) y: (unaPoblacion at: iteracion + 1).
			iteracion := iteracion + 2]!

cruzaParUna: unaPoblacion conCantidad: unaCantidad
	| iteracion |
	iteracion := 1.
	unaCantidad timesRepeat: 
			[self cruzarCromosoma: (unaPoblacion at: iteracion) y: (unaPoblacion at: iteracion + 1).
			iteracion := iteracion + 2]!

cruzarCromosoma: cromo1 y: cromo2
	| iteracion temp cromoHijo1 cromoHijo2 genMedioHijo1 genMedioHijo2 |
	iteracion := 1.
	cromoHijo1 := Cromosoma new.
	cromoHijo2 := Cromosoma new.
	cromoHijo1 genes add: cromo2 genes first.
	cromoHijo2 genes add: cromo1 genes first.
	genMedioHijo1 := cromo1 genes second.
	genMedioHijo2 := cromo2 genes second.
	3 timesRepeat: 
			[temp := genMedioHijo1 posicion at: iteracion.
			genMedioHijo1 posicion at: iteracion put: (genMedioHijo2 posicion at: iteracion).
			genMedioHijo2 posicion at: iteracion put: temp.
			iteracion := iteracion + 1].
	cromoHijo1 genes add: genMedioHijo1.
	cromoHijo2 genes add: genMedioHijo2.
	cromoHijo1 genes add: cromo1 genes third.
	cromoHijo2 genes add: cromo2 genes third.
	cromo1 genes: cromoHijo1 genes.
	cromo2 genes: cromoHijo2 genes!

cruzarResTorneo: unaPoblacion
	| numCruza |
	numCruza := unaPoblacion size // 2.
	numCruza \\ 2 = 0
		ifTrue: [self cruzaParUna: unaPoblacion conCantidad: numCruza // 2]
		ifFalse: [self cruzaImparUna: unaPoblacion conCantidad: numCruza // 2].
	^unaPoblacion! !
!CruzamientoSimple categoriesFor: #cruzaImparUna:conCantidad:!public! !
!CruzamientoSimple categoriesFor: #cruzaParUna:conCantidad:!public! !
!CruzamientoSimple categoriesFor: #cruzarCromosoma:y:!public! !
!CruzamientoSimple categoriesFor: #cruzarResTorneo:!public! !

Torneo guid: (GUID fromString: '{8FD5E23B-9C62-47A3-BEDC-690FD816F7CF}')!
Torneo comment: ''!
!Torneo categoriesForClass!MVP-Models! !
!Torneo methodsFor!

poblacion
	^poblacion!

poblacion: anObject
	poblacion := anObject!

seleccion: unaPoblacion
	unaPoblacion  sortUsing: (DefaultSortAlgorithm sortBlock: [:a :b | a aptitud > b aptitud]).
	^unaPoblacion! !
!Torneo categoriesFor: #poblacion!accessing!private! !
!Torneo categoriesFor: #poblacion:!accessing!private! !
!Torneo categoriesFor: #seleccion:!public! !

"Binary Globals"!

