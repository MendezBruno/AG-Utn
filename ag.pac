| package |
package := Package name: 'ag'.
package paxVersion: 1;
	basicComment: ''.


package classNames
	add: #Ag;
	add: #AptitudEstrategy;
	add: #Cromosoma;
	add: #CruzamientoRandom;
	add: #CruzamientoStrategy;
	add: #Gen;
	add: #MutacionEstrategy;
	yourself.

package binaryGlobalNames: (Set new
	yourself).

package globalAliases: (Set new
	yourself).

package setPrerequisites: (IdentitySet new
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk X6\Object Arts\Dolphin\Base\Dolphin';
	yourself).

package!

"Class Definitions"!

Model subclass: #Ag
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Model subclass: #AptitudEstrategy
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Model subclass: #Cromosoma
	instanceVariableNames: ''
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
AptitudEstrategy guid: (GUID fromString: '{97B8C90B-9B34-4447-AC5E-4449677598AA}')!
AptitudEstrategy comment: ''!
!AptitudEstrategy categoriesForClass!Unclassified! !
Cromosoma guid: (GUID fromString: '{A176475E-F6E0-43D0-BF7F-1D2D90E925A1}')!
Cromosoma comment: ''!
!Cromosoma categoriesForClass!Unclassified! !
CruzamientoStrategy guid: (GUID fromString: '{83E98813-6E16-4E1A-84FC-AC76A766A268}')!
CruzamientoStrategy comment: ''!
!CruzamientoStrategy categoriesForClass!Unclassified! !
Gen guid: (GUID fromString: '{81058575-B619-4315-AF48-DDD1A55C3CA6}')!
Gen comment: 'Esta Clase se usa para definir cada gen que compondran los cromosomas.'!
!Gen categoriesForClass!Unclassified! !
!Gen methodsFor!

crearPosicionesGen: unNumero 
	"Crea el array del gen con las posiciones de un numero"

	posicion := Array new: unNumero!

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
!Gen categoriesFor: #crearPosicionesGen:!accessing!public! !
!Gen categoriesFor: #nombre!accessing!public! !
!Gen categoriesFor: #nombre:!accessing!public! !
!Gen categoriesFor: #posicion!accessing!public! !
!Gen categoriesFor: #posicion:!accessing!public! !

!Gen class methodsFor!

new: unNumero
	|gen|
	gen:= self new.
	gen posicion: (Array new: unNumero).
	^gen! !
!Gen class categoriesFor: #new:!public! !

MutacionEstrategy guid: (GUID fromString: '{0EDDE7A8-F69A-495C-8B62-ACB0B6E8A9E2}')!
MutacionEstrategy comment: ''!
!MutacionEstrategy categoriesForClass!Unclassified! !
CruzamientoRandom guid: (GUID fromString: '{335521A3-1182-45AC-867E-2A0694C1E1EA}')!
CruzamientoRandom comment: ''!
!CruzamientoRandom categoriesForClass!Unclassified! !
"Binary Globals"!

