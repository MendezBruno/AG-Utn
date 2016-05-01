"Filed out from Dolphin Smalltalk 7"!

TestCase subclass: #TestAptitud
	instanceVariableNames: 'poblacion'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
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

