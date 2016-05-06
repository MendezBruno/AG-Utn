| package |
package := Package name: 'testAg'.
package paxVersion: 1;
	basicComment: ''.


package classNames
	add: #GenTests;
	add: #PoblacionTest;
	add: #TestAptitud;
	yourself.

package binaryGlobalNames: (Set new
	yourself).

package globalAliases: (Set new
	yourself).

package setPrerequisites: (IdentitySet new
	add: 'ag';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Contributions\Camp Smalltalk\SUnit\SUnit';
	yourself).

package!

"Class Definitions"!

TestCase subclass: #GenTests
	instanceVariableNames: 'gen'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
TestCase subclass: #PoblacionTest
	instanceVariableNames: 'poblacion'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
TestCase subclass: #TestAptitud
	instanceVariableNames: 'poblacion'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

"Global Aliases"!


"Loose Methods"!

"End of package definition"!

"Source Globals"!

"Classes"!

GenTests guid: (GUID fromString: '{DF2ADFD4-A595-4054-8295-48C18C478890}')!
GenTests comment: ''!
!GenTests categoriesForClass!Unclassified! !
!GenTests methodsFor!

setUp
	gen:= Gen new:5!

testNew
	| genAux |
	genAux := Gen new: 7.
	self assert: genAux posicion size = 7! !
!GenTests categoriesFor: #setUp!public! !
!GenTests categoriesFor: #testNew!public! !

PoblacionTest guid: (GUID fromString: '{D1FEE66A-C0B9-4C71-84FC-C0D40E78CDD6}')!
PoblacionTest comment: ''!
!PoblacionTest categoriesForClass!Unclassified! !
!PoblacionTest methodsFor!

setUp
	| cromosoma1 cromosoma2 |
	poblacion := Poblacion new.
	cromosoma1 := Cromosoma new.
	cromosoma1 genes add: (Gen new: #(1 0 1 0 0 1)).
	cromosoma1 genes add: (Gen new: #(1 1 0 0 1 0)).
	cromosoma1 genes add: (Gen new: #(0 1 1 0 1 1)).
	cromosoma2 := Cromosoma new.
	cromosoma2 genes add: (Gen new: #(1 0 0 1 0 0)).
	cromosoma2 genes add: (Gen new: #(0 0 1 0 1 1)).
	cromosoma2 genes add: (Gen new: #(1 0 1 1 1 1)).
	poblacion cromosomas add: cromosoma1.
	poblacion cromosomas add: cromosoma2.! !
!PoblacionTest categoriesFor: #setUp!public! !

TestAptitud guid: (GUID fromString: '{8C0F7198-AFBB-4106-BFD2-9BC3922A91A9}')!
TestAptitud comment: ''!
!TestAptitud categoriesForClass!SUnit! !
!TestAptitud methodsFor!

setUp
	| cromosoma1 cromosoma2 |
	poblacion := Poblacion new.
	cromosoma1 := Cromosoma new.
	cromosoma1 genes add: (Gen new: #(1 0 1 0 0 1)).
	cromosoma1 genes add: (Gen new: #(1 1 0 0 1 0)).
	cromosoma1 genes add: (Gen new: #(0 1 1 0 1 1)).
	cromosoma2 := Cromosoma new.
	cromosoma2 genes add: (Gen new: #(1 0 0 1 0 0)).
	cromosoma2 genes add: (Gen new: #(0 0 1 0 1 1)).
	cromosoma2 genes add: (Gen new: #(1 0 1 1 1 1)).
	poblacion cromosomas add: cromosoma1.
	poblacion cromosomas add: cromosoma2.!

testAptitud
	| aptitud |
	aptitud := Aptitud new.
	 self assert: ((aptitud aptitud: poblacion cromosomas first) = 450).
	! !
!TestAptitud categoriesFor: #setUp!public! !
!TestAptitud categoriesFor: #testAptitud!public! !

"Binary Globals"!

