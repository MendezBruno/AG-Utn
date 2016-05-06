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
	add: #Caracteristica;
	add: #CruzamientoRandom;
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
	instanceVariableNames: 'poblacionInicial poblacion_seleccionada poblacionMundial mutacion cruzamiento seleccion aptitud'
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
Model subclass: #Caracteristica
	instanceVariableNames: 'nombre posicion'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Model subclass: #CruzamientoStrategy
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Model subclass: #Gen
	instanceVariableNames: 'nombre caracteristicas aptitud'
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
CruzamientoStrategy subclass: #CruzamientoRandom
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

aptitud
	^aptitud!

aptitud: anObject
	aptitud := anObject!

cargarPoblacion
	| fileIn byteArray |
	fileIn := FileStream read: 'poblacion'.
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
	gen := Gen new.
	gen nombre: unNombre.
	^gen!

cruzamiento
	^cruzamiento!

cruzamiento: anObject
	cruzamiento := anObject!

guardarPoblacion
|fileOut|
fileOut :=FileStream write: 'poblacion'.
fileOut nextPutAll:  (ODBSerializer serializeToBytes: self poblacionMundial).
fileOut flush; close.!

initialize
	self aptitud: Aptitud new.
	self seleccion: Torneo new.!

mutacion
	^mutacion!

mutacion: anObject
	mutacion := anObject!

poblacion_seleccionada
	^poblacion_seleccionada!

poblacion_seleccionada: anObject
	poblacion_seleccionada := anObject!

poblacionInicial
	^poblacionInicial!

poblacionInicial: anObject
	poblacionInicial := anObject!

poblacionMundial
	^poblacionMundial!

poblacionMundial: anObject
	poblacionMundial := anObject!

seleccion
	^seleccion!

seleccion: anObject
	seleccion := anObject! !
!Ag categoriesFor: #aptitud!accessing!public! !
!Ag categoriesFor: #aptitud:!accessing!public! !
!Ag categoriesFor: #cargarPoblacion!public! !
!Ag categoriesFor: #convertir_a_decimal:!public! !
!Ag categoriesFor: #crearGen:!public! !
!Ag categoriesFor: #cruzamiento!accessing!public! !
!Ag categoriesFor: #cruzamiento:!accessing!public! !
!Ag categoriesFor: #guardarPoblacion!public! !
!Ag categoriesFor: #initialize!public! !
!Ag categoriesFor: #mutacion!accessing!public! !
!Ag categoriesFor: #mutacion:!accessing!public! !
!Ag categoriesFor: #poblacion_seleccionada!accessing!public! !
!Ag categoriesFor: #poblacion_seleccionada:!accessing!public! !
!Ag categoriesFor: #poblacionInicial!accessing!public! !
!Ag categoriesFor: #poblacionInicial:!accessing!public! !
!Ag categoriesFor: #poblacionMundial!accessing!private! !
!Ag categoriesFor: #poblacionMundial:!accessing!private! !
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

genesIguales:listaGenes
|listaNumeros |
listaNumeros:= OrderedCollection new.
listaGenes do:[:gen| listaNumeros add: ( self convertir_a_decimal:gen)].
^(listaNumeros size)- (listaNumeros asSet size)
! !
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

Caracteristica guid: (GUID fromString: '{81058575-B619-4315-AF48-DDD1A55C3CA6}')!
Caracteristica comment: 'Esta Clase se usa para definir cada gen que compondran los cromosomas.'!
!Caracteristica categoriesForClass!Unclassified! !
!Caracteristica methodsFor!

nombre
	"Answer the value of the receiver's 'nombre' instance variable."

	^nombre!

nombre: anObject
	"Set the value of the receiver's 'nombre' instance variable to the argument."

	nombre := anObject!

posicion
	"Answer the value of the receiver's 'posicion' instance variable."

	^posicion!

posicion: anObject
	"Set the value of the receiver's 'posicion' instance variable to the argument."

	posicion := anObject! !
!Caracteristica categoriesFor: #nombre!accessing!public! !
!Caracteristica categoriesFor: #nombre:!accessing!public! !
!Caracteristica categoriesFor: #posicion!accessing!public! !
!Caracteristica categoriesFor: #posicion:!accessing!public! !

!Caracteristica class methodsFor!

new: unArray
	|gen|
	gen:= self new.
	gen posicion: unArray.
	^gen! !
!Caracteristica class categoriesFor: #new:!public! !

CruzamientoStrategy guid: (GUID fromString: '{83E98813-6E16-4E1A-84FC-AC76A766A268}')!
CruzamientoStrategy comment: ''!
!CruzamientoStrategy categoriesForClass!Unclassified! !
Gen guid: (GUID fromString: '{A176475E-F6E0-43D0-BF7F-1D2D90E925A1}')!
Gen comment: ''!
!Gen categoriesForClass!Unclassified! !
!Gen methodsFor!

aptitud
	^aptitud!

aptitud: anObject
	aptitud := anObject!

caracteristicas: anObject
	caracteristicas := anObject!

carateristicas
	^caracteristicas!

dameTusCaracteristicasDesde: start a: stop
	| listaGenes |
	listaGenes := OrderedCollection new.
	caracteristicas do: [:caracteristica | listaGenes add: (caracteristica posicion copyFrom: start to: stop)].
	^listaGenes!

initialize
	self caracteristicas: OrderedCollection new! !
!Gen categoriesFor: #aptitud!public! !
!Gen categoriesFor: #aptitud:!public! !
!Gen categoriesFor: #caracteristicas:!accessing!public! !
!Gen categoriesFor: #carateristicas!public! !
!Gen categoriesFor: #dameTusCaracteristicasDesde:a:!public! !
!Gen categoriesFor: #initialize!public! !

!Gen class methodsFor!

new
	^super new initialize
! !
!Gen class categoriesFor: #new!public! !

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
	(((self cromosomas at: rCromo) carateristicas at: rGen) posicion at: rPosicion) = 1
		ifTrue: [((self cromosomas at: rCromo) carateristicas at: rGen) posicion at: rPosicion put: 0]
		ifFalse: [((self cromosomas at: rCromo) carateristicas at: rGen) posicion at: rPosicion put: 1]! !
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
CruzamientoRandom guid: (GUID fromString: '{335521A3-1182-45AC-867E-2A0694C1E1EA}')!
CruzamientoRandom comment: ''!
!CruzamientoRandom categoriesForClass!Unclassified! !
Torneo guid: (GUID fromString: '{8FD5E23B-9C62-47A3-BEDC-690FD816F7CF}')!
Torneo comment: ''!
!Torneo categoriesForClass!MVP-Models! !
!Torneo methodsFor!

poblacion
	^poblacion!

poblacion: anObject
	poblacion := anObject!

seleccionar

	 poblacion cromosomas sortUsing: (DefaultSortAlgorithm sortBlock: [:a :b |a aptitud >b aptitud ]).

	^poblacion

! !
!Torneo categoriesFor: #poblacion!accessing!private! !
!Torneo categoriesFor: #poblacion:!accessing!private! !
!Torneo categoriesFor: #seleccionar!public! !

"Binary Globals"!

