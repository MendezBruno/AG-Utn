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
	add: #CruzamientoRandom;
	add: #CruzamientoStrategy;
	add: #Gen;
	add: #MutacionEstrategy;
	add: #Poblacion;
	yourself.

package binaryGlobalNames: (Set new
	yourself).

package globalAliases: (Set new
	yourself).

package setPrerequisites: (IdentitySet new
	add: 'C:\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\Base\Dolphin';
	yourself).

package!

"Class Definitions"!

Model subclass: #Ag
	instanceVariableNames: 'poblacionInicial poblacionFinal mutacion cruzamiento seleccion aptitud'
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
	instanceVariableNames: 'genes'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Model subclass: #CruzamientoStrategy
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Model subclass: #Gen
	instanceVariableNames: 'nombre posicion'
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
CruzamientoStrategy subclass: #CruzamientoRandom
	instanceVariableNames: ''
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
Aptitud guid: (GUID fromString: '{8AC60A11-E710-4988-8D36-E944B7CB5A46}')!
Aptitud comment: 'Calcula la funcion de aptitud de los cromsomas tieendo en cuenta los datos de su diccionario'!
!Aptitud categoriesForClass!MVP-Models! !
!Aptitud methodsFor!

aptitud: unCromosoma
	(self dicDeFunciones at:1) aptitudDe: (unCromosoma dameTusGenesDesde: 1 a:1).
	(self dicDeFunciones at:2) aptitudDe: (unCromosoma dameTusGenesDesde: 1 a:1).
	(self dicDeFunciones at:4) aptitudDe: (unCromosoma dameTusGenesDesde: 1 a:1).
	
	
!

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
!AptitudSuperposicion class methodsFor!

aptitudDe: listaGenes
^(self genesIguales:listaGenes)*-125


!

genesIguales:listaGenes
|listaNumeros |
listaNumeros:= OrderedCollection new.
listaGenes do:[:gen| listaNumeros add: ("genDeByteaInt:"gen)].
^(listaNumeros size)- (listaNumeros asSet size)
! !
!AptitudSuperposicion class categoriesFor: #aptitudDe:!public! !
!AptitudSuperposicion class categoriesFor: #genesIguales:!public! !

AptitudValoracion guid: (GUID fromString: '{739A3F71-BF23-494C-9922-7A57F172BD1A}')!
AptitudValoracion comment: ''!
!AptitudValoracion categoriesForClass!MVP-Models! !
!AptitudValoracion class methodsFor!

aptitudDe: listaGenes
	| acum |
	acum := 0.
	listaGenes do: [:gen | acum := acum + (self valorDe: gen)].
	^acum * 50!

valorDe: gen
|acum|
acum:=0.

	^acum
		! !
!AptitudValoracion class categoriesFor: #aptitudDe:!public! !
!AptitudValoracion class categoriesFor: #valorDe:!public! !

Cromosoma guid: (GUID fromString: '{A176475E-F6E0-43D0-BF7F-1D2D90E925A1}')!
Cromosoma comment: ''!
!Cromosoma categoriesForClass!Unclassified! !
!Cromosoma methodsFor!

dameTusGenesDesde: start a: stop
	| listaGenes |
	listaGenes := OrderedCollection new.
	genes do: [:gen | listaGenes add: (gen copyFrom: start to: stop)].
	^listaGenes!

genes
	^genes!

genes: anObject
	genes := anObject!

initialize
	self genes: OrderedCollection new.! !
!Cromosoma categoriesFor: #dameTusGenesDesde:a:!public! !
!Cromosoma categoriesFor: #genes!accessing!private! !
!Cromosoma categoriesFor: #genes:!accessing!private! !
!Cromosoma categoriesFor: #initialize!public! !

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
!Gen categoriesFor: #nombre!accessing!public! !
!Gen categoriesFor: #nombre:!accessing!public! !
!Gen categoriesFor: #posicion!accessing!public! !
!Gen categoriesFor: #posicion:!accessing!public! !

!Gen class methodsFor!

new: unArray
	|gen|
	gen:= self new.
	gen posicion: unArray.
	^gen! !
!Gen class categoriesFor: #new:!public! !

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
	self cromosomas: OrderedCollection new.! !
!Poblacion categoriesFor: #cromosomas!accessing!private! !
!Poblacion categoriesFor: #cromosomas:!accessing!private! !
!Poblacion categoriesFor: #initialize!public! !

!Poblacion class methodsFor!

new
	^super new initialize! !
!Poblacion class categoriesFor: #new!public! !

CruzamientoRandom guid: (GUID fromString: '{335521A3-1182-45AC-867E-2A0694C1E1EA}')!
CruzamientoRandom comment: ''!
!CruzamientoRandom categoriesForClass!Unclassified! !
"Binary Globals"!

