| package |
package := Package name: 'agUi'.
package paxVersion: 1;
	basicComment: ''.

package imageStripperBytes: (ByteArray fromBase64String: 'IVNUQiAzIEYPDQAEAAAASW1hZ2VTdHJpcHBlcgAAAABSAAAABAAAAGFnVWlSAAAAKwAAAEM6XFVz
ZXJzXGJydW5vXERlc2t0b3BccHJvZ3JhbWEgQWdcYWdVaS5leGWaAAAAUgAAAAQAAABhZ1VpUgAA
AB8AAABBbGdvcml0bW9HZW5ldGljb1Nlc3Npb25NYW5hZ2VyBT4gAQAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=').

package classNames
	add: #AlgoritmoGeneticoSessionManager;
	add: #ShellAg;
	add: #ShellAgPresenter;
	add: #ShellCargarPoblacion;
	add: #ShellCargarPoblacionPresenter;
	add: #ShellCorrerAlgoritmo;
	add: #ShellPoblacionActualPresenter;
	add: #ShellViewPoblacionActual;
	yourself.

package binaryGlobalNames: (Set new
	yourself).

package globalAliases: (Set new
	yourself).

package setPrerequisites: (IdentitySet new
	add: 'ag';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\Base\Dolphin';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Presenters\Boolean\Dolphin Boolean Presenter';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Models\List\Dolphin List Models';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Presenters\List\Dolphin List Presenter';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Base\Dolphin MVP Base';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Presenters\Number\Dolphin Number Presenter';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Presenters\Text\Dolphin Text Presenter';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Type Converters\Dolphin Type Converters';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Models\Value\Dolphin Value Models';
	yourself).

package!

"Class Definitions"!

Shell subclass: #ShellAgPresenter
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Shell subclass: #ShellCargarPoblacionPresenter
	instanceVariableNames: 'ctrlNombreMateria ctrlCheckBoxFinal ctrlComboBoxDificultad ctrlComboBoxDiaSemana elemDificultad elemDiaSemana'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Shell subclass: #ShellCorrerAlgoritmo
	instanceVariableNames: 'ctrlNumeroDeCorridas ctrlConteinerResultado ctrlNumeroPoblacionInicial ctrlProbabilidadMutacion'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Shell subclass: #ShellPoblacionActualPresenter
	instanceVariableNames: 'ctrlNombreMateria ctrlLabelFinal ctrlLabelDificultad ctrlLabelDiaSemana listaMaterias'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RuntimeSessionManager subclass: #AlgoritmoGeneticoSessionManager
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ShellView subclass: #ShellAg
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ShellView subclass: #ShellCargarPoblacion
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ShellView subclass: #ShellViewPoblacionActual
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

"Global Aliases"!


"Loose Methods"!

"End of package definition"!

"Source Globals"!

"Classes"!

ShellAgPresenter guid: (GUID fromString: '{14950F2D-C825-4003-9B6D-216844DCC40F}')!
ShellAgPresenter comment: ''!
!ShellAgPresenter categoriesForClass!MVP-Presenters! !
!ShellAgPresenter methodsFor!

cargarPoblacionShell
	ShellCargarPoblacionPresenter showOn: self model.!

correrAlgoritmoShell
	ShellCorrerAlgoritmo showOn: self model!

onViewOpened
	super onViewOpened.
	(File exists: RelativeFileLocator new basePath , 'poblacion')
		ifTrue: [self model cargarPoblacion]
		ifFalse: [MessageBox error: 'No se ha encontrado el archivo de poblaciones']!

verPoblacionActualShell
	ShellPoblacionActualPresenter showOn: self model.! !
!ShellAgPresenter categoriesFor: #cargarPoblacionShell!public! !
!ShellAgPresenter categoriesFor: #correrAlgoritmoShell!public! !
!ShellAgPresenter categoriesFor: #onViewOpened!public! !
!ShellAgPresenter categoriesFor: #verPoblacionActualShell!public! !

!ShellAgPresenter class methodsFor!

resource_Default_view
	"Answer the literal data from which the 'Default view' resource can be reconstituted.
	DO NOT EDIT OR RECATEGORIZE THIS METHOD.

	If you wish to modify this resource evaluate:
	ViewComposer openOn: (ResourceIdentifier class: self selector: #resource_Default_view)
	"

	^#(#'!!STL' 3 788558 10 ##(Smalltalk.STBViewProxy) 8 ##(Smalltalk.ShellView) 98 27 0 0 98 2 27131905 131073 416 0 524550 ##(Smalltalk.ColorRef) 8 4278190080 0 551 0 0 0 416 1180166 ##(Smalltalk.ProportionalLayout) 234 240 98 0 16 234 256 576 0 0 0 0 0 1 263494 3 ##(Smalltalk.Icon) 0 16 1572870 ##(Smalltalk.ImageRelativeFileLocator) 8 'C:\Users\bruno\Desktop\programa Ag\ia3.ico' 0 610 0 16 656 8 'C:\Users\bruno\Desktop\programa Ag\ia3.ico' 0 0 0 1 0 0 983302 ##(Smalltalk.MessageSequence) 202 208 98 2 721670 ##(Smalltalk.MessageSend) 8 #createAt:extent: 98 2 328198 ##(Smalltalk.Point) 2731 21 850 1201 841 416 786 8 #updateMenuBar 576 416 983302 ##(Smalltalk.WINDOWPLACEMENT) 8 #[44 0 0 0 0 0 0 0 0 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 85 5 0 0 10 0 0 0 173 7 0 0 174 1 0 0] 98 2 410 8 ##(Smalltalk.ContainerView) 98 15 0 416 98 2 8 1140850688 131073 992 0 0 0 7 0 0 0 992 788230 ##(Smalltalk.BorderLayout) 1 1 410 1008 98 15 0 992 98 2 8 1140850688 131073 1104 0 196934 1 ##(Smalltalk.RGB) 25231361 0 7 0 263174 ##(Smalltalk.Font) 0 16 459014 ##(Smalltalk.LOGFONT) 8 #[235 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 3 2 1 34 84 97 104 111 109 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 850 193 193 0 1104 530 234 240 576 32 234 256 576 590342 ##(Smalltalk.Rectangle) 850 1 41 850 1 1 722 202 208 98 1 786 816 98 2 850 1 1 850 1185 139 1104 930 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 80 2 0 0 69 0 0 0] 98 1 410 8 ##(Smalltalk.StaticText) 98 16 0 1104 98 2 8 1140850945 65 1568 0 0 0 7 0 1202 0 16 1234 8 #[229 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 850 193 193 0 1568 0 8 4294902987 852486 ##(Smalltalk.NullConverter) 0 0 0 722 202 208 98 2 786 816 98 2 850 1 41 850 1185 99 1568 786 8 #text: 98 1 8 'Algoritmo Genético' 1568 930 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 20 0 0 0 80 2 0 0 69 0 0 0] 98 0 850 193 193 0 27 1984 0 27 0 0 0 410 1008 98 15 0 992 98 2 8 1140850688 131073 2000 0 786694 ##(Smalltalk.IndexedColor) 33554445 0 7 0 1202 0 16 1234 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 3 2 1 34 84 97 104 111 109 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 1280 0 2000 530 234 240 576 32 234 256 576 1346 850 1 41 850 1 21 722 202 208 98 1 786 816 98 2 850 1 139 850 1185 251 2000 930 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 69 0 0 0 80 2 0 0 194 0 0 0] 98 1 410 1584 98 16 0 2000 98 2 8 1140850945 65 2400 0 0 0 7 0 0 0 2400 0 8 4294902987 1730 0 0 0 722 202 208 98 2 786 816 98 2 850 1 41 850 1185 191 2400 786 1888 98 1 8 'Algoritmo desarollado para la catedra Inteligencia 
Artificial Diactada en la la Facultad Tecnológica Nacional- Regional Buenos Airescromosomas se van reproducionedo y van teniendo diferentes razgos a travez de las generaciones que  van surguiendo, esto no permite obtener el mejor individuo sino un individuo aceptable segun los descendientes que se vayan formando a lo largo ' 2400 930 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 20 0 0 0 80 2 0 0 115 0 0 0] 98 0 1984 0 27 1984 0 27 234 256 576 0 722 202 208 98 1 786 816 98 2 850 1 1 850 1185 389 992 930 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 80 2 0 0 194 0 0 0] 98 2 1104 2000 1984 0 27 410 1008 98 15 0 416 98 2 8 1140850688 131073 2880 0 0 0 7 0 0 0 2880 530 234 240 576 16 234 256 576 0 722 202 208 98 1 786 816 98 2 850 1 389 850 1185 391 2880 930 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 194 0 0 0 80 2 0 0 133 1 0 0] 98 3 410 8 ##(Smalltalk.PushButton) 98 20 0 2880 98 2 8 1140924416 1 3152 0 0 0 7 0 1202 0 16 1234 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 1280 0 3152 0 8 4294903513 1180998 4 ##(Smalltalk.CommandDescription) 8 #cargarPoblacionShell 8 'Cargar Población' 1 1 0 0 32 0 0 0 722 202 208 98 3 786 816 98 2 850 1 1 850 1185 131 3152 786 8 #isEnabled: 98 1 32 3152 786 1888 98 1 8 'Cargar Población' 3152 930 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 80 2 0 0 65 0 0 0] 98 0 1984 0 29 410 3168 98 20 0 2880 98 2 8 1140924416 1 3616 0 0 0 7 0 1202 0 16 1234 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 1280 0 3616 0 8 4294903513 3298 8 #verPoblacionActualShell 8 'Ver Población Actual' 1 1 0 0 32 0 0 0 722 202 208 98 3 786 816 98 2 850 1 131 850 1185 131 3616 786 3488 98 1 32 3616 786 1888 98 1 8 'Ver Población Actual' 3616 930 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 65 0 0 0 80 2 0 0 130 0 0 0] 98 0 1984 0 29 410 3168 98 20 0 2880 98 2 8 1140924416 1 4032 0 0 0 7 0 1202 0 16 1234 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 1280 0 4032 0 8 4294903513 3298 8 #correrAlgoritmoShell 8 'Correr Algoritmo' 1 1 0 0 32 0 0 0 722 202 208 98 3 786 816 98 2 850 1 261 850 1185 131 4032 786 3488 98 1 32 4032 786 1888 98 1 8 'Correr Algoritmo' 4032 930 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 130 0 0 0 80 2 0 0 195 0 0 0] 98 0 1984 0 29 1984 0 27 1984 0 27 )! !
!ShellAgPresenter class categoriesFor: #resource_Default_view!public!resources-views! !

ShellCargarPoblacionPresenter guid: (GUID fromString: '{D9432469-4DE6-4C08-9897-4AACBA58656E}')!
ShellCargarPoblacionPresenter comment: ''!
!ShellCargarPoblacionPresenter categoriesForClass!MVP-Presenters! !
!ShellCargarPoblacionPresenter methodsFor!

cargaDiaSemana
	self elemDiaSemana: Dictionary new.
	elemDiaSemana at: 'Lunes' put: #(0 0 1).
	elemDiaSemana at: 'Martes' put: #(0 1 0).
	elemDiaSemana at: 'Miercoles' put: #(0 1 1).
	elemDiaSemana at: 'Jueves' put: #(1 0 0).
	elemDiaSemana at: 'Viernes' put: #(1 0 1).
	elemDiaSemana at: 'Sabado' put: #(1 1 0)!

cargarCombos

" Cargar dificultad"
	self ctrlComboBoxDificultad list add: 'Dificil'.
	self ctrlComboBoxDificultad list add: 'Moderada'.
	self ctrlComboBoxDificultad list add: 'Facil'.
	self ctrlComboBoxDificultad list add: 'Muy Facil'.

"Cargar Dias de la semana"
	self ctrlComboBoxDiaSemana list add: 'Lunes'.
	self ctrlComboBoxDiaSemana list add: 'Martes'.
	self ctrlComboBoxDiaSemana list add: 'Miercoles'.
	self ctrlComboBoxDiaSemana list add: 'Jueves'.
	self ctrlComboBoxDiaSemana list add: 'Viernes'.
	self ctrlComboBoxDiaSemana list add: 'Sabado'!

cargarDificultad
	self elemDificultad: Dictionary new.
	elemDificultad at: 'Dificil' put: #(1 1).
	elemDificultad at: 'Moderada' put: #(1 0).
	elemDificultad at: 'Facil' put: #(0 1).
	elemDificultad at: 'Muy Facil' put: #(0 0)!

createComponents
	super createComponents.
	ctrlNombreMateria := self add: TextPresenter new name: 'textBoxNombreMateria'.
	ctrlCheckBoxFinal:= self add: BooleanPresenter new name: 'checkBoxFinal'.
	ctrlComboBoxDificultad:= self add: ListPresenter new name: 'comboBoxDificultad'.
	ctrlComboBoxDiaSemana:= self add: ListPresenter new name: 'comboBoxDiaSemana'.

	self cargarCombos.!

ctrlCheckBoxFinal
	^ctrlCheckBoxFinal!

ctrlCheckBoxFinal: anObject
	ctrlCheckBoxFinal := anObject!

ctrlComboBoxDiaSemana
	^ctrlComboBoxDiaSemana!

ctrlComboBoxDiaSemana: anObject
	ctrlComboBoxDiaSemana := anObject!

ctrlComboBoxDificultad
	^ctrlComboBoxDificultad!

ctrlComboBoxDificultad: anObject
	ctrlComboBoxDificultad := anObject!

ctrlNombreMateria
	^ctrlNombreMateria!

ctrlNombreMateria: anObject
	ctrlNombreMateria := anObject!

elemDiaSemana
	^elemDiaSemana!

elemDiaSemana: anObject
	elemDiaSemana := anObject!

elemDificultad
	^elemDificultad!

elemDificultad: anObject
	elemDificultad := anObject!

guardarMateria
	| auxGen |
	auxGen := self model crearGen: ctrlNombreMateria value.
	auxGen tieneFinal: ctrlCheckBoxFinal value.
	auxGen dificultad: (self elemDificultad at: ctrlComboBoxDificultad selection)
		tipo: ctrlComboBoxDificultad selection.
	auxGen diaSemana: (self elemDiaSemana at: ctrlComboBoxDiaSemana selection)
		tipo: ctrlComboBoxDiaSemana selection.
	(self model existeGen: auxGen)
		ifTrue: [MessageBox errorMsg: 'Materia ya existe' caption: 'Algoritmo Genético']
		ifFalse: 
			[self model agregarGen: auxGen.
			MessageBox notify: 'Materia guardada exitosamente' caption: 'Algoritmo Genético']!

habilitarBotonGuardar
	^(ctrlNombreMateria ~= '' and: [ctrlComboBoxDiaSemana hasSelection])
		and: [ctrlComboBoxDificultad hasSelection]!

onViewOpened
	super onViewOpened.
	self cargarDificultad.
	self cargaDiaSemana
	
	
	!

queryCommand: aCommandQuery 
	| command |
	command := aCommandQuery commandSymbol.
	#guardarMateria == command 
		ifTrue: 
			[aCommandQuery isEnabled: self habilitarBotonGuardar.
			^true].! !
!ShellCargarPoblacionPresenter categoriesFor: #cargaDiaSemana!public! !
!ShellCargarPoblacionPresenter categoriesFor: #cargarCombos!public! !
!ShellCargarPoblacionPresenter categoriesFor: #cargarDificultad!public! !
!ShellCargarPoblacionPresenter categoriesFor: #createComponents!public! !
!ShellCargarPoblacionPresenter categoriesFor: #ctrlCheckBoxFinal!accessing!private! !
!ShellCargarPoblacionPresenter categoriesFor: #ctrlCheckBoxFinal:!accessing!private! !
!ShellCargarPoblacionPresenter categoriesFor: #ctrlComboBoxDiaSemana!accessing!private! !
!ShellCargarPoblacionPresenter categoriesFor: #ctrlComboBoxDiaSemana:!accessing!private! !
!ShellCargarPoblacionPresenter categoriesFor: #ctrlComboBoxDificultad!accessing!private! !
!ShellCargarPoblacionPresenter categoriesFor: #ctrlComboBoxDificultad:!accessing!private! !
!ShellCargarPoblacionPresenter categoriesFor: #ctrlNombreMateria!accessing!private! !
!ShellCargarPoblacionPresenter categoriesFor: #ctrlNombreMateria:!accessing!private! !
!ShellCargarPoblacionPresenter categoriesFor: #elemDiaSemana!accessing!public! !
!ShellCargarPoblacionPresenter categoriesFor: #elemDiaSemana:!accessing!public! !
!ShellCargarPoblacionPresenter categoriesFor: #elemDificultad!accessing!public! !
!ShellCargarPoblacionPresenter categoriesFor: #elemDificultad:!accessing!public! !
!ShellCargarPoblacionPresenter categoriesFor: #guardarMateria!public! !
!ShellCargarPoblacionPresenter categoriesFor: #habilitarBotonGuardar!public! !
!ShellCargarPoblacionPresenter categoriesFor: #onViewOpened!public! !
!ShellCargarPoblacionPresenter categoriesFor: #queryCommand:!public! !

!ShellCargarPoblacionPresenter class methodsFor!

resource_Default_view
	"Answer the literal data from which the 'Default view' resource can be reconstituted.
	DO NOT EDIT OR RECATEGORIZE THIS METHOD.

	If you wish to modify this resource evaluate:
	ViewComposer openOn: (ResourceIdentifier class: self selector: #resource_Default_view)
	"

	^#(#'!!STL' 3 788558 10 ##(Smalltalk.STBViewProxy) 8 ##(Smalltalk.ShellView) 98 27 0 0 98 2 26214401 131073 416 0 524550 ##(Smalltalk.ColorRef) 8 4278190080 0 39 0 0 0 416 1180166 ##(Smalltalk.ProportionalLayout) 234 240 98 0 16 234 256 576 0 0 0 0 0 9115 263494 3 ##(Smalltalk.Icon) 0 16 1572870 ##(Smalltalk.ImageRelativeFileLocator) 8 'C:\Users\bruno\Desktop\programa Ag\ia3.ico' 0 0 0 0 1 0 0 983302 ##(Smalltalk.MessageSequence) 202 208 98 2 721670 ##(Smalltalk.MessageSend) 8 #createAt:extent: 98 2 328198 ##(Smalltalk.Point) 2731 21 818 721 801 416 754 8 #updateMenuBar 576 416 983302 ##(Smalltalk.WINDOWPLACEMENT) 8 #[44 0 0 0 0 0 0 0 0 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 85 5 0 0 10 0 0 0 189 6 0 0 154 1 0 0] 98 5 410 8 ##(Smalltalk.ContainerView) 98 15 0 416 98 2 8 1140850688 131073 960 0 196934 1 ##(Smalltalk.RGB) 25231361 0 7 0 0 0 960 530 234 240 576 32 234 256 98 2 410 8 ##(Smalltalk.TextEdit) 98 16 0 960 98 2 8 1140916352 1025 1136 0 482 8 4278190080 0 7 0 0 0 1136 0 8 4294903359 852486 ##(Smalltalk.NullConverter) 0 0 1 690 202 208 98 3 754 784 98 2 818 355 41 818 335 69 1136 754 8 #selectionRange: 98 1 525062 ##(Smalltalk.Interval) 3 1 3 1136 754 8 #isTextModified: 98 1 32 1136 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 177 0 0 0 20 0 0 0 88 1 0 0 54 0 0 0] 98 0 818 193 193 0 27 8 'textBoxNombreMateria' 590342 ##(Smalltalk.Rectangle) 818 21 41 818 21 41 690 202 208 98 1 754 784 98 2 818 1 1 818 709 149 960 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 98 1 0 0 74 0 0 0] 98 2 410 8 ##(Smalltalk.StaticText) 98 16 0 960 98 2 8 1140850944 65 1840 0 0 0 7 0 263174 ##(Smalltalk.Font) 0 16 459014 ##(Smalltalk.LOGFONT) 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 818 193 193 0 1840 0 8 4294902987 1266 0 0 0 690 202 208 98 2 754 784 98 2 818 21 41 818 335 69 1840 754 8 #text: 98 1 8 'Nombre de la materia:' 1840 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 10 0 0 0 20 0 0 0 177 0 0 0 54 0 0 0] 98 0 1584 0 27 1136 1584 0 27 410 976 98 15 0 416 98 2 8 1140850688 131073 2272 0 1042 33488897 0 7 0 0 0 2272 788230 ##(Smalltalk.BorderLayout) 1 1 0 0 0 410 1856 98 16 0 2272 98 2 8 1140850944 65 2384 0 0 0 7 0 1922 0 16 1954 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 818 193 193 0 2384 0 8 4294902987 1266 0 0 0 690 202 208 98 2 754 784 98 2 818 1 41 818 345 69 2384 754 2176 98 1 8 'Tiene Final?' 2384 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 20 0 0 0 172 0 0 0 54 0 0 0] 98 0 1584 0 27 410 8 ##(Smalltalk.CheckBox) 98 16 0 2272 98 2 8 1409363203 1 2752 721990 2 ##(Smalltalk.ValueHolder) 0 0 1114118 ##(Smalltalk.NeverSearchPolicy) 32 0 0 7 0 0 0 2752 0 8 4294903513 1266 0 0 0 690 202 208 98 2 754 784 98 2 818 345 41 818 365 69 2752 754 2176 98 1 8 'Sí' 2752 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 172 0 0 0 20 0 0 0 98 1 0 0 54 0 0 0] 98 0 1584 0 27 234 256 98 2 2752 8 'checkBoxFinal' 1618 818 1 41 818 1 41 690 202 208 98 1 754 784 98 2 818 1 149 818 709 149 2272 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 74 0 0 0 98 1 0 0 148 0 0 0] 98 2 2384 2752 1584 0 27 410 976 98 15 0 416 98 2 8 1140850688 131073 3392 0 1042 25231361 0 7 0 0 0 3392 0 234 256 98 2 410 8 ##(Smalltalk.ComboBox) 98 17 0 3392 98 2 8 1412498947 1025 3504 590662 2 ##(Smalltalk.ListModel) 202 208 576 0 1310726 ##(Smalltalk.IdentitySearchPolicy) 482 8 4278190080 0 7 0 0 0 3504 0 8 4294902087 459270 ##(Smalltalk.Message) 8 #displayString 98 0 576 401 690 202 208 98 1 754 784 98 2 818 345 33 818 341 53 3504 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 172 0 0 0 16 0 0 0 86 1 0 0 42 0 0 0] 98 0 1584 0 27 8 'comboBoxDificultad' 0 690 202 208 98 1 754 784 98 2 818 1 297 818 709 149 3392 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 148 0 0 0 98 1 0 0 222 0 0 0] 98 2 410 1856 98 16 0 3392 98 2 8 1140850944 65 4112 0 0 0 7 0 1922 0 16 1954 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 818 193 193 0 4112 0 8 4294902987 1266 0 0 0 690 202 208 98 2 754 784 98 2 818 5 33 818 251 51 4112 754 2176 98 1 8 'Dificultad:' 4112 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 2 0 0 0 16 0 0 0 127 0 0 0 41 0 0 0] 98 0 1584 0 27 3504 1584 0 27 410 976 98 15 0 416 98 2 8 1140850688 131073 4480 0 1042 33488897 0 7 0 0 0 4480 0 234 256 98 2 410 3520 98 17 0 4480 98 2 8 1412498947 1025 4592 3586 202 208 576 0 3648 482 3680 0 7 0 0 0 4592 0 8 4294902087 3714 3744 98 0 576 401 690 202 208 98 1 754 784 98 2 818 345 31 818 341 53 4592 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 172 0 0 0 15 0 0 0 86 1 0 0 41 0 0 0] 98 0 1584 0 27 8 'comboBoxDiaSemana' 0 690 202 208 98 1 754 784 98 2 818 1 445 818 709 149 4480 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 222 0 0 0 98 1 0 0 40 1 0 0] 98 2 410 1856 98 16 0 4480 98 2 8 1140850944 65 5088 0 0 0 7 0 1922 0 16 1954 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 818 193 193 0 5088 0 8 4294902987 1266 0 0 0 690 202 208 98 2 754 784 98 2 818 11 31 818 241 39 5088 754 2176 98 1 8 'Día de la semana:' 5088 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 5 0 0 0 15 0 0 0 125 0 0 0 34 0 0 0] 98 0 1584 0 27 4592 1584 0 27 410 976 98 15 0 416 98 2 8 1140850688 131073 5456 0 0 0 7 0 0 0 5456 530 234 240 576 32 234 256 576 0 690 202 208 98 1 754 784 98 2 818 1 593 818 709 151 5456 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 40 1 0 0 98 1 0 0 115 1 0 0] 98 2 410 8 ##(Smalltalk.PushButton) 98 20 0 5456 98 2 8 1140924416 1 5728 0 0 0 7 0 0 0 5728 0 8 4294903513 1180998 4 ##(Smalltalk.CommandDescription) 8 #guardarMateria 8 'Guardar' 1 1 0 0 16 0 0 0 690 202 208 98 3 754 784 98 2 818 1 1 818 355 151 5728 754 8 #isEnabled: 98 1 32 5728 754 2176 98 1 8 'Guardar' 5728 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 177 0 0 0 75 0 0 0] 98 0 1584 0 29 410 5744 98 20 0 5456 98 2 8 1140924416 1 6144 0 0 0 7 0 0 0 6144 0 8 4294903513 5826 8 #cancel 8 '&Cancelar' 1 1 0 0 32 0 0 0 690 202 208 98 3 754 784 98 2 818 355 1 818 355 151 6144 754 6016 98 1 32 6144 754 2176 98 1 8 '&Cancelar' 6144 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 177 0 0 0 0 0 0 0 98 1 0 0 75 0 0 0] 98 0 1584 0 29 1584 0 27 1584 0 27 )! !
!ShellCargarPoblacionPresenter class categoriesFor: #resource_Default_view!public!resources-views! !

ShellCorrerAlgoritmo guid: (GUID fromString: '{042AED47-A19D-4EE2-9E89-179100A7F285}')!
ShellCorrerAlgoritmo comment: ''!
!ShellCorrerAlgoritmo categoriesForClass!MVP-Presenters! !
!ShellCorrerAlgoritmo methodsFor!

avisarEtapa: unaEtapa
	| esp enter t |
	enter := '
'.
	esp := '******************************************************************'.
	t := ctrlConteinerResultado.
	t value: t value , enter , esp , enter , unaEtapa , enter , esp , enter!

avisarMejorIndividuo
	| mejorIndividuo |
	mejorIndividuo := OrderedCollection new.
	mejorIndividuo add: self model poblacionInicial first.
	self reportarPoblacion: mejorIndividuo!

correrAlgoritmo
	| i |
	i := 1.
	self reporteInicial.
	self model generanPoblacionInicial: ctrlNumeroPoblacionInicial value.
	ctrlNumeroDeCorridas value timesRepeat: 
			[self avisarEtapa: 'COMIENZO ITERACION N: ' , i displayString , '...'.
			self reportarPoblacion: self model poblacionInicial.
			self avisarEtapa: 'ETAPA SELECCION'.
			self model seleccion.
			self reportarSeleccion: self model poblacionInicial.
			self avisarEtapa: 'ETAPA CRUZAMIENTO'.
			self model cruzamiento.
			self avisarEtapa: 'ETAPA MUTACION'.
			self reporteMutacion: (self model mutacionConProbabilidad: ctrlProbabilidadMutacion value).
			self model poblacionInicial: self model poblacionCruzada.
			self model calcularAptitudDeNuevaPoblacionInicial.
			self avisarEtapa: 'RESULTADO DE LA VUELTA'.
			self avisarMejorIndividuo.
			i := i + 1]!

createComponents
	super createComponents.
	ctrlNumeroDeCorridas := self add: NumberPresenter new name: 'boxNumCorridas'.
	ctrlConteinerResultado := self add: TextPresenter new name: 'conteinerResultado'.
	ctrlNumeroPoblacionInicial := self add: NumberPresenter new name: 'boxCantidadDePoblacionInicial'.
	ctrlProbabilidadMutacion := self add: NumberPresenter new name: 'boxProbabilidadDeMutacion'!

ctrlConteinerResultado
	^ctrlConteinerResultado!

ctrlConteinerResultado: anObject
	ctrlConteinerResultado := anObject!

ctrlNumeroDeCorridas
	^ctrlNumeroDeCorridas!

ctrlNumeroDeCorridas: anObject
	ctrlNumeroDeCorridas := anObject!

ctrlNumeroPoblacionInicial
	^ctrlNumeroPoblacionInicial!

ctrlNumeroPoblacionInicial: anObject
	ctrlNumeroPoblacionInicial := anObject!

ctrlProbabilidadMutacion
	^ctrlProbabilidadMutacion!

ctrlProbabilidadMutacion: anObject
	ctrlProbabilidadMutacion := anObject!

reportarPoblacion: unaPoblacion
	| enter t i |
	enter := '
'.
	i := 1.
	t := ctrlConteinerResultado.
	unaPoblacion do: 
			[:cromo |
			t
				value: t value , enter , 'individuo numero: ' , i displayString , enter , ' materias: '
						, cromo genes first nombre , enter
						, 'Final: ' , cromo genes first final
						, enter , 'Dificultad: '
						, cromo genes first dificultad , enter
						, 'Dia: ' , cromo genes first dia
						, enter , cromo genes second nombre
						, enter , 'Final: '
						, cromo genes second final , enter
						, 'Dificultad: ' , cromo genes second dificultad
						, enter , 'Dia: '
						, cromo genes second dia , enter
						, cromo genes third nombre , enter
						, 'Final: ' , cromo genes third final
						, enter , 'Dificultad: '
						, cromo genes third dificultad , enter
						, 'Dia: ' , cromo genes third dia
						, enter , enter
						, ' aptitud: ' , cromo aptitud displayString
						, enter.
			i := i + 1]!

reportarSeleccion: unaPoblacion
	| mide poblaPublicar i |
	i := 1.
	poblaPublicar := OrderedCollection new.
	mide := unaPoblacion size // 2.
	mide timesRepeat: 
			[poblaPublicar add: (unaPoblacion at: i).
			i := i + 1].
	self reportarPoblacion: poblaPublicar!

reporteInicial
	ctrlConteinerResultado value: 'Corriendo algoritmo.
'.
	ctrlConteinerResultado
		value: ctrlConteinerResultado value , 'Numero de Corridas: '
				, ctrlNumeroDeCorridas value displayString , '
'.
	ctrlConteinerResultado
		value: ctrlConteinerResultado value , 'Numero de Poblacion Inicial: '
				, ctrlNumeroPoblacionInicial value displayString , '
'.
	ctrlConteinerResultado
		value: ctrlConteinerResultado value , 'Probabilidad de mutacion: '
				, ctrlProbabilidadMutacion value displayString , '%
'!

reporteMutacion: aBoolean
	aBoolean
		ifTrue: [ctrlConteinerResultado value: ctrlConteinerResultado value , 'Se Muto.
']
		ifFalse: [ctrlConteinerResultado value: ctrlConteinerResultado value , 'No se Muto.
']! !
!ShellCorrerAlgoritmo categoriesFor: #avisarEtapa:!public! !
!ShellCorrerAlgoritmo categoriesFor: #avisarMejorIndividuo!public! !
!ShellCorrerAlgoritmo categoriesFor: #correrAlgoritmo!public! !
!ShellCorrerAlgoritmo categoriesFor: #createComponents!public! !
!ShellCorrerAlgoritmo categoriesFor: #ctrlConteinerResultado!accessing!public! !
!ShellCorrerAlgoritmo categoriesFor: #ctrlConteinerResultado:!accessing!public! !
!ShellCorrerAlgoritmo categoriesFor: #ctrlNumeroDeCorridas!accessing!public! !
!ShellCorrerAlgoritmo categoriesFor: #ctrlNumeroDeCorridas:!accessing!public! !
!ShellCorrerAlgoritmo categoriesFor: #ctrlNumeroPoblacionInicial!accessing!public! !
!ShellCorrerAlgoritmo categoriesFor: #ctrlNumeroPoblacionInicial:!accessing!public! !
!ShellCorrerAlgoritmo categoriesFor: #ctrlProbabilidadMutacion!accessing!public! !
!ShellCorrerAlgoritmo categoriesFor: #ctrlProbabilidadMutacion:!accessing!public! !
!ShellCorrerAlgoritmo categoriesFor: #reportarPoblacion:!public! !
!ShellCorrerAlgoritmo categoriesFor: #reportarSeleccion:!public! !
!ShellCorrerAlgoritmo categoriesFor: #reporteInicial!public! !
!ShellCorrerAlgoritmo categoriesFor: #reporteMutacion:!public! !

!ShellCorrerAlgoritmo class methodsFor!

resource_Default_view
	"Answer the literal data from which the 'Default view' resource can be reconstituted.
	DO NOT EDIT OR RECATEGORIZE THIS METHOD.

	If you wish to modify this resource evaluate:
	ViewComposer openOn: (ResourceIdentifier class: self selector: #resource_Default_view)
	"

	^#(#'!!STL' 3 788558 10 ##(Smalltalk.STBViewProxy) 8 ##(Smalltalk.ShellView) 98 27 0 0 98 2 26607617 131073 416 0 524550 ##(Smalltalk.ColorRef) 8 4278190080 0 39 0 0 0 416 1180166 ##(Smalltalk.ProportionalLayout) 234 240 98 0 32 234 256 98 2 410 8 ##(Smalltalk.MultilineTextEdit) 98 16 0 416 98 2 8 1143017796 1025 624 0 196934 1 ##(Smalltalk.RGB) 33494329 0 7 0 263174 ##(Smalltalk.Font) 0 16 459014 ##(Smalltalk.LOGFONT) 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 328198 ##(Smalltalk.Point) 193 193 0 624 0 8 4294903359 852486 ##(Smalltalk.NullConverter) 0 0 9 983302 ##(Smalltalk.MessageSequence) 202 208 98 3 721670 ##(Smalltalk.MessageSend) 8 #createAt:extent: 98 2 818 1 1 818 505 743 624 962 8 #selectionRange: 98 1 525062 ##(Smalltalk.Interval) 3 1 3 624 962 8 #isTextModified: 98 1 32 624 983302 ##(Smalltalk.WINDOWPLACEMENT) 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 252 0 0 0 115 1 0 0] 98 0 818 193 193 0 27 8 'conteinerResultado' 0 0 0 0 0 1 0 263494 3 ##(Smalltalk.Icon) 0 16 1572870 ##(Smalltalk.ImageRelativeFileLocator) 8 'C:\Users\bruno\Desktop\programa Ag\ia3.ico' 0 0 0 1 0 0 898 202 208 98 3 962 992 98 2 818 2731 21 818 1021 801 416 962 8 #text: 98 1 8 'Correr el Algoritmo - Algoritmo Genético' 416 962 8 #updateMenuBar 576 416 1186 8 #[44 0 0 0 0 0 0 0 0 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 85 5 0 0 10 0 0 0 83 7 0 0 154 1 0 0] 98 2 624 410 8 ##(Smalltalk.ContainerView) 98 15 0 416 98 2 8 1140850688 131073 1616 0 706 33488897 0 7 0 0 0 1616 530 234 240 98 4 410 1632 98 15 0 1616 98 2 8 1140850688 131073 1760 0 0 0 7 0 0 0 1760 530 234 240 576 32 234 256 98 2 410 8 ##(Smalltalk.PushButton) 98 20 0 1760 98 2 8 1140924416 1 1888 0 0 0 7 0 738 0 16 770 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 3 2 1 34 84 97 104 111 109 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 818 193 193 0 1888 0 8 4294903513 1180998 4 ##(Smalltalk.CommandDescription) 8 #limpiar 8 'Limpiar' 1 1 0 0 32 0 0 0 898 202 208 98 3 962 992 98 2 818 253 1 818 253 189 1888 962 8 #isEnabled: 98 1 32 1888 962 1488 98 1 8 'Limpiar' 1888 1186 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 126 0 0 0 0 0 0 0 252 0 0 0 94 0 0 0] 98 0 1248 0 29 8 'botonLimpiar' 0 898 202 208 98 1 962 992 98 2 818 1 555 818 505 189 1760 1186 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 21 1 0 0 252 0 0 0 115 1 0 0] 98 2 410 1904 98 20 0 1760 98 2 8 1140924416 1 2544 0 0 0 7 0 738 0 16 770 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 3 2 1 34 84 97 104 111 109 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 2016 0 2544 0 8 4294903513 2050 8 #correrAlgoritmo 8 'Correr' 1 1 0 0 32 0 0 0 898 202 208 98 3 962 992 98 2 818 1 1 818 253 189 2544 962 2240 98 1 32 2544 962 1488 98 1 8 'Correr' 2544 1186 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 126 0 0 0 94 0 0 0] 98 0 1248 0 29 1888 1248 0 27 524806 ##(Smalltalk.Fraction) 369 371 410 1632 98 15 0 1616 98 2 8 1140850688 131073 2992 0 0 0 7 0 0 0 2992 0 234 256 98 2 410 8 ##(Smalltalk.TextEdit) 98 16 0 2992 98 2 8 1140924416 1025 3088 0 482 8 4278190080 0 7 0 0 0 3088 0 8 4294903359 787206 ##(Smalltalk.NumberToText) 0 8 '' 0 1 898 202 208 98 3 962 992 98 2 818 411 11 818 51 41 3088 962 1072 98 1 1106 3 1 3 3088 962 1152 98 1 32 3088 1186 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 205 0 0 0 5 0 0 0 230 0 0 0 25 0 0 0] 98 0 1248 0 27 8 'boxProbabilidadDeMutacion' 0 898 202 208 98 1 962 992 98 2 818 1 185 818 505 187 2992 1186 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 92 0 0 0 252 0 0 0 185 0 0 0] 98 3 410 8 ##(Smalltalk.StaticText) 98 16 0 2992 98 2 8 1140850944 65 3680 0 0 0 7 0 0 0 3680 0 8 4294902987 866 0 0 0 898 202 208 98 2 962 992 98 2 818 11 3 818 311 41 3680 962 1488 98 1 8 'Probabilidad De Mutación' 3680 1186 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 5 0 0 0 1 0 0 0 160 0 0 0 21 0 0 0] 98 0 1248 0 27 3088 410 3696 98 16 0 2992 98 2 8 1140850944 65 4000 0 0 0 7 0 0 0 4000 0 8 4294902987 866 0 0 0 898 202 208 98 2 962 992 98 2 818 471 11 818 31 31 4000 962 1488 98 1 8 '%' 4000 1186 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 235 0 0 0 5 0 0 0 250 0 0 0 20 0 0 0] 98 0 1248 0 27 1248 0 27 2962 373 371 16 234 256 576 0 898 202 208 98 1 962 992 98 2 818 505 1 818 505 743 1616 1186 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 252 0 0 0 0 0 0 0 248 1 0 0 115 1 0 0] 98 4 410 1632 98 15 0 1616 98 2 8 1140850688 131073 4496 0 0 0 7 0 0 0 4496 0 234 256 98 4 410 3104 98 16 0 4496 98 2 8 1140924416 1025 4592 0 482 8 4278190080 0 7 0 0 0 4592 0 8 4294903359 3218 0 8 '' 0 1 898 202 208 98 3 962 992 98 2 818 411 111 818 71 41 4592 962 1072 98 1 1106 3 1 3 4592 962 1152 98 1 32 4592 1186 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 205 0 0 0 55 0 0 0 240 0 0 0 75 0 0 0] 98 0 1248 0 27 8 'boxCantidadDePoblacionInicial' 410 3104 98 16 0 4496 98 2 8 1140924416 1025 4992 0 482 4672 0 7 0 0 0 4992 0 8 4294903359 3218 0 8 '' 0 1 898 202 208 98 3 962 992 98 2 818 411 51 818 71 41 4992 962 1072 98 1 1106 3 1 3 4992 962 1152 98 1 32 4992 1186 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 205 0 0 0 25 0 0 0 240 0 0 0 45 0 0 0] 98 0 1248 0 27 8 'boxNumCorridas' 0 898 202 208 98 1 962 992 98 2 818 1 1 818 505 185 4496 1186 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 252 0 0 0 92 0 0 0] 98 4 410 3696 98 16 0 4496 98 2 8 1140850944 65 5536 0 0 0 7 0 0 0 5536 0 8 4294902987 866 0 0 0 898 202 208 98 2 962 992 98 2 818 11 51 818 241 39 5536 962 1488 98 1 8 'Número de Corridas' 5536 1186 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 5 0 0 0 25 0 0 0 125 0 0 0 44 0 0 0] 98 0 1248 0 27 4992 410 3696 98 16 0 4496 98 2 8 1140850944 65 5840 0 0 0 7 0 0 0 5840 0 8 4294902987 866 0 0 0 898 202 208 98 2 962 992 98 2 818 11 111 818 351 41 5840 962 1488 98 1 8 'Cantidad de Poblacion Inicial' 5840 1186 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 5 0 0 0 55 0 0 0 180 0 0 0 75 0 0 0] 98 0 1248 0 27 4592 1248 0 27 2992 410 1632 98 15 0 1616 98 2 8 1140850688 131073 6144 0 0 0 7 0 0 0 6144 0 234 256 576 0 898 202 208 98 1 962 992 98 2 818 1 371 818 505 185 6144 1186 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 185 0 0 0 252 0 0 0 21 1 0 0] 98 0 1248 0 27 1760 1248 0 27 1248 0 27 )! !
!ShellCorrerAlgoritmo class categoriesFor: #resource_Default_view!public!resources-views! !

ShellPoblacionActualPresenter guid: (GUID fromString: '{F5AC67BD-7BDE-4475-82F8-E5031EC3631A}')!
ShellPoblacionActualPresenter comment: ''!
!ShellPoblacionActualPresenter categoriesForClass!MVP-Presenters! !
!ShellPoblacionActualPresenter methodsFor!

borrarMateria
	| elemento |
	(MessageBox confirm: 'Desea borrar la materia? ' caption: 'Algoritmo Genético')
		ifTrue: 
			[elemento := self listaMaterias selection.
			self model poblacionMundial remove: elemento.
			self listaMaterias view refreshContents]!

cargarInfoMateria
	| materia |
	materia := listaMaterias selectionOrNil.
	materia
		ifNil: 
			[ctrlNombreMateria value: ''.
			ctrlLabelFinal value: ''.
			ctrlLabelDificultad value: ''.
			ctrlLabelDiaSemana value: '']
		ifNotNil: 
			[ctrlNombreMateria value: materia nombre.
			ctrlLabelFinal value: materia final.
			ctrlLabelDificultad value: materia dificultad.
			ctrlLabelDiaSemana value: materia dia]!

cargarMaterias
	self listaMaterias list: self model poblacionMundial.
	!

createComponents
	super createComponents.
	ctrlNombreMateria := self add: TextPresenter new name: 'labelNombreMateria'.
	ctrlLabelFinal:= self add: TextPresenter new name: 'labelTieneFinal'.
	ctrlLabelDificultad:= self add: TextPresenter new name: 'labelDificultad'.
	ctrlLabelDiaSemana:= self add: TextPresenter new name: 'labelDiaSemana'.
	listaMaterias:= self add: ListPresenter new name: 'boxListaMaterias'.
	!

createSchematicWiring
	"Create the trigger wiring for the receiver"

	super createSchematicWiring.
	listaMaterias 
		when: #selectionChanged
		send: #cargarInfoMateria
		to: self.

	!

ctrlLabelDiaSemana
	^ctrlLabelDiaSemana!

ctrlLabelDiaSemana: anObject
	ctrlLabelDiaSemana := anObject!

ctrlLabelDificultad
	^ctrlLabelDificultad!

ctrlLabelDificultad: anObject
	ctrlLabelDificultad := anObject!

ctrlLabelFinal
	^ctrlLabelFinal!

ctrlLabelFinal: anObject
	ctrlLabelFinal := anObject!

ctrlNombreMateria
	^ctrlNombreMateria!

ctrlNombreMateria: anObject
	ctrlNombreMateria := anObject!

listaMaterias
	^listaMaterias!

listaMaterias: anObject
	listaMaterias := anObject!

onViewOpened
	super onViewOpened.
	self cargarMaterias.! !
!ShellPoblacionActualPresenter categoriesFor: #borrarMateria!public! !
!ShellPoblacionActualPresenter categoriesFor: #cargarInfoMateria!public! !
!ShellPoblacionActualPresenter categoriesFor: #cargarMaterias!public! !
!ShellPoblacionActualPresenter categoriesFor: #createComponents!public! !
!ShellPoblacionActualPresenter categoriesFor: #createSchematicWiring!public! !
!ShellPoblacionActualPresenter categoriesFor: #ctrlLabelDiaSemana!accessing!private! !
!ShellPoblacionActualPresenter categoriesFor: #ctrlLabelDiaSemana:!accessing!private! !
!ShellPoblacionActualPresenter categoriesFor: #ctrlLabelDificultad!accessing!private! !
!ShellPoblacionActualPresenter categoriesFor: #ctrlLabelDificultad:!accessing!private! !
!ShellPoblacionActualPresenter categoriesFor: #ctrlLabelFinal!accessing!private! !
!ShellPoblacionActualPresenter categoriesFor: #ctrlLabelFinal:!accessing!private! !
!ShellPoblacionActualPresenter categoriesFor: #ctrlNombreMateria!accessing!private! !
!ShellPoblacionActualPresenter categoriesFor: #ctrlNombreMateria:!accessing!private! !
!ShellPoblacionActualPresenter categoriesFor: #listaMaterias!accessing!private! !
!ShellPoblacionActualPresenter categoriesFor: #listaMaterias:!accessing!private! !
!ShellPoblacionActualPresenter categoriesFor: #onViewOpened!public! !

!ShellPoblacionActualPresenter class methodsFor!

resource_Default_view
	"Answer the literal data from which the 'Default view' resource can be reconstituted.
	DO NOT EDIT OR RECATEGORIZE THIS METHOD.

	If you wish to modify this resource evaluate:
	ViewComposer openOn: (ResourceIdentifier class: self selector: #resource_Default_view)
	"

	^#(#'!!STL' 3 788558 10 ##(Smalltalk.STBViewProxy) 8 ##(Smalltalk.ShellView) 98 27 0 0 98 2 26214401 131073 416 0 524550 ##(Smalltalk.ColorRef) 8 4278190080 0 39 0 0 0 416 788230 ##(Smalltalk.BorderLayout) 1 1 0 0 0 410 8 ##(Smalltalk.ContainerView) 98 15 0 416 98 2 8 1140850688 131073 560 0 786694 ##(Smalltalk.IndexedColor) 33554447 0 7 0 0 0 560 1180166 ##(Smalltalk.ProportionalLayout) 234 240 98 0 32 234 256 98 2 410 8 ##(Smalltalk.ListBox) 98 17 0 560 98 2 8 1412497665 1025 768 590662 2 ##(Smalltalk.ListModel) 202 208 720 0 1310726 ##(Smalltalk.IdentitySearchPolicy) 196934 1 ##(Smalltalk.RGB) 16908287 0 7 0 0 0 768 0 8 4294903905 459270 ##(Smalltalk.Message) 8 #displayString 98 0 720 32 983302 ##(Smalltalk.MessageSequence) 202 208 98 2 721670 ##(Smalltalk.MessageSend) 8 #createAt:extent: 98 2 328198 ##(Smalltalk.Point) 1 1 1170 321 743 768 1106 8 #horizontalExtent: 98 1 1 768 983302 ##(Smalltalk.WINDOWPLACEMENT) 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 160 0 0 0 115 1 0 0] 98 0 1170 193 193 0 27 8 'boxListaMaterias' 0 1042 202 208 98 1 1106 1136 98 2 1170 1 1 1170 321 743 560 1266 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 160 0 0 0 115 1 0 0] 98 1 768 1328 0 27 410 576 98 15 0 416 98 2 8 1140850688 131073 1520 0 930 16908033 0 7 0 0 0 1520 530 1 1 0 410 576 98 15 0 1520 98 2 8 1140850688 131073 1616 0 0 0 7 0 0 0 1616 674 234 240 720 32 234 256 720 0 1042 202 208 98 1 1106 1136 98 2 1170 1 653 1170 539 91 1616 1266 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 70 1 0 0 13 1 0 0 115 1 0 0] 98 1 410 8 ##(Smalltalk.PushButton) 98 20 0 1616 98 2 8 1140924416 1 1888 0 0 0 7 0 0 0 1888 0 8 4294903513 1180998 4 ##(Smalltalk.CommandDescription) 8 #borrarMateria 8 'Borrar' 1 1 0 0 16 0 0 0 1042 202 208 98 3 1106 1136 98 2 1170 1 1 1170 539 91 1888 1106 8 #isEnabled: 98 1 32 1888 1106 8 #text: 98 1 8 'Borrar' 1888 1266 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 13 1 0 0 45 0 0 0] 98 0 1328 0 29 1328 0 27 0 0 410 576 98 15 0 1520 98 2 8 1140850688 131073 2320 0 0 0 7 0 0 0 2320 674 234 240 720 16 234 256 720 0 1042 202 208 98 1 1106 1136 98 2 1170 1 1 1170 539 653 2320 1266 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 13 1 0 0 70 1 0 0] 98 4 410 576 98 15 0 2320 98 2 8 1140850688 131073 2592 0 0 0 7 0 0 0 2592 674 234 240 720 32 234 256 98 2 410 8 ##(Smalltalk.StaticText) 98 16 0 2592 98 2 8 1140850945 65 2720 0 0 0 7 0 263174 ##(Smalltalk.Font) 0 16 459014 ##(Smalltalk.LOGFONT) 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 1170 193 193 0 2720 0 8 4294902987 852486 ##(Smalltalk.NullConverter) 0 0 0 1042 202 208 98 2 1106 1136 98 2 1170 279 41 1170 261 83 2720 1106 2224 98 1 8 'nombre' 2720 1266 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 139 0 0 0 20 0 0 0 13 1 0 0 61 0 0 0] 98 0 1328 0 27 8 'labelNombreMateria' 590342 ##(Smalltalk.Rectangle) 1170 21 41 1170 1 41 1042 202 208 98 1 1106 1136 98 2 1170 1 1 1170 539 163 2592 1266 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 13 1 0 0 81 0 0 0] 98 2 410 2736 98 16 0 2592 98 2 8 1140850944 65 3392 0 0 0 7 0 2802 0 16 2834 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 1170 193 193 0 3392 0 8 4294902987 2914 0 0 0 1042 202 208 98 2 1106 1136 98 2 1170 21 41 1170 259 83 3392 1106 2224 98 1 8 'Nombre de la materia:' 3392 1266 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 10 0 0 0 20 0 0 0 139 0 0 0 61 0 0 0] 98 0 1328 0 27 2720 1328 0 27 410 576 98 15 0 2320 98 2 8 1140850688 131073 3760 0 0 0 7 0 0 0 3760 674 234 240 720 32 234 256 98 2 410 2736 98 16 0 3760 98 2 8 1140850945 65 3888 0 0 0 7 0 2802 0 16 2834 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 1170 193 193 0 3888 0 8 4294902987 2914 0 0 0 1042 202 208 98 2 1106 1136 98 2 1170 279 41 1170 261 123 3888 1106 2224 98 1 8 'dificultad' 3888 1266 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 139 0 0 0 20 0 0 0 13 1 0 0 81 0 0 0] 98 0 1328 0 27 8 'labelDificultad' 3170 1170 21 41 1170 1 1 1042 202 208 98 1 1106 1136 98 2 1170 1 163 1170 539 163 3760 1266 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 81 0 0 0 13 1 0 0 162 0 0 0] 98 2 410 2736 98 16 0 3760 98 2 8 1140850944 65 4480 0 0 0 7 0 2802 0 16 2834 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 1170 193 193 0 4480 0 8 4294902987 2914 0 0 0 1042 202 208 98 2 1106 1136 98 2 1170 21 41 1170 259 123 4480 1106 2224 98 1 8 'Dificultad:' 4480 1266 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 10 0 0 0 20 0 0 0 139 0 0 0 81 0 0 0] 98 0 1328 0 27 3888 1328 0 27 410 576 98 15 0 2320 98 2 8 1140850688 131073 4848 0 0 0 7 0 0 0 4848 674 234 240 720 32 234 256 98 2 410 2736 98 16 0 4848 98 2 8 1140850945 65 4976 0 0 0 7 0 0 0 4976 0 8 4294902987 2914 0 0 0 1042 202 208 98 2 1106 1136 98 2 1170 279 41 1170 261 83 4976 1106 2224 98 1 8 'SioNo' 4976 1266 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 139 0 0 0 20 0 0 0 13 1 0 0 61 0 0 0] 98 0 1328 0 27 8 'labelTieneFinal' 3170 1170 21 41 1170 1 41 1042 202 208 98 1 1106 1136 98 2 1170 1 325 1170 539 163 4848 1266 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 162 0 0 0 13 1 0 0 243 0 0 0] 98 2 410 2736 98 16 0 4848 98 2 8 1140850944 65 5504 0 0 0 7 0 2802 0 16 2834 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 1170 193 193 0 5504 0 8 4294902987 2914 0 0 0 1042 202 208 98 2 1106 1136 98 2 1170 21 41 1170 259 83 5504 1106 2224 98 1 8 'Tiene Final?' 5504 1266 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 10 0 0 0 20 0 0 0 139 0 0 0 61 0 0 0] 98 0 1328 0 27 4976 1328 0 27 410 576 98 15 0 2320 98 2 8 1140850688 131073 5872 0 0 0 7 0 0 0 5872 674 234 240 720 32 234 256 98 2 410 2736 98 16 0 5872 98 2 8 1140850945 65 6000 0 0 0 7 0 0 0 6000 0 8 4294902987 2914 0 0 0 1042 202 208 98 2 1106 1136 98 2 1170 279 41 1170 261 127 6000 1106 2224 98 1 8 'unDia' 6000 1266 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 139 0 0 0 20 0 0 0 13 1 0 0 83 0 0 0] 98 0 1328 0 27 8 'labelDiaSemana' 3170 1170 21 41 1170 1 1 1042 202 208 98 1 1106 1136 98 2 1170 1 487 1170 539 167 5872 1266 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 243 0 0 0 13 1 0 0 70 1 0 0] 98 2 410 2736 98 16 0 5872 98 2 8 1140850944 65 6528 0 0 0 7 0 2802 0 16 2834 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 1170 193 193 0 6528 0 8 4294902987 2914 0 0 0 1042 202 208 98 2 1106 1136 98 2 1170 21 41 1170 259 127 6528 1106 2224 98 1 8 'Día de la semana:' 6528 1266 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 10 0 0 0 20 0 0 0 139 0 0 0 83 0 0 0] 98 0 1328 0 27 6000 1328 0 27 1328 0 27 234 256 720 0 1042 202 208 98 1 1106 1136 98 2 1170 321 1 1170 539 743 1520 1266 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 160 0 0 0 0 0 0 0 173 1 0 0 115 1 0 0] 98 2 2320 1616 1328 0 27 234 256 720 0 0 0 0 0 9619 263494 3 ##(Smalltalk.Icon) 0 16 1572870 ##(Smalltalk.ImageRelativeFileLocator) 8 'C:\Users\bruno\Desktop\programa Ag\ia3.ico' 0 7090 0 16 7136 8 'C:\Users\bruno\Desktop\programa Ag\ia3.ico' 0 0 0 1 0 0 1042 202 208 98 2 1106 1136 98 2 1170 2731 21 1170 871 801 416 1106 8 #updateMenuBar 720 416 1266 8 #[44 0 0 0 0 0 0 0 0 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 85 5 0 0 10 0 0 0 8 7 0 0 154 1 0 0] 98 2 560 1520 1328 0 27 )! !
!ShellPoblacionActualPresenter class categoriesFor: #resource_Default_view!public!resources-views! !

AlgoritmoGeneticoSessionManager guid: (GUID fromString: '{5E99EAAE-EE0F-4F83-A1E5-18F9DF7172BF}')!
AlgoritmoGeneticoSessionManager comment: ''!
!AlgoritmoGeneticoSessionManager categoriesForClass!System-Support! !
!AlgoritmoGeneticoSessionManager methodsFor!

allowDuplicate
	^false!

main
	self mainShellClass showOn: Ag new!

mainShellClass
	^ShellAgPresenter! !
!AlgoritmoGeneticoSessionManager categoriesFor: #allowDuplicate!public! !
!AlgoritmoGeneticoSessionManager categoriesFor: #main!public! !
!AlgoritmoGeneticoSessionManager categoriesFor: #mainShellClass!public! !

ShellAg guid: (GUID fromString: '{2B06A607-E056-4008-80AF-6695E0AC7FF9}')!
ShellAg comment: ''!
!ShellAg categoriesForClass!MVP-Views! !
!ShellAg methodsFor!

cargarPoblacionShell
	ShellCargarPoblacion modalOn: self model.!

correrAlgoritmoShell!

verPoblacionActualShell! !
!ShellAg categoriesFor: #cargarPoblacionShell!public! !
!ShellAg categoriesFor: #correrAlgoritmoShell!public! !
!ShellAg categoriesFor: #verPoblacionActualShell!public! !

!ShellAg class methodsFor!

resource_Default_view
	"Answer the literal data from which the 'Default view' resource can be reconstituted.
	DO NOT EDIT OR RECATEGORIZE THIS METHOD.

	If you wish to modify this resource evaluate:
	ViewComposer openOn: (ResourceIdentifier class: self selector: #resource_Default_view)
	"

	^#(#'!!STL' 3 788558 10 ##(Smalltalk.STBViewProxy) 8 ##(Smalltalk.ShellAg) 98 27 0 0 98 2 27131905 131073 416 0 524550 ##(Smalltalk.ColorRef) 8 4278190080 0 39 0 0 0 416 1180166 ##(Smalltalk.ProportionalLayout) 234 240 98 0 16 234 256 576 0 0 0 0 0 1 0 0 0 0 1 0 0 983302 ##(Smalltalk.MessageSequence) 202 208 98 2 721670 ##(Smalltalk.MessageSend) 8 #createAt:extent: 98 2 328198 ##(Smalltalk.Point) 2719 21 738 981 1021 416 674 8 #updateMenuBar 576 416 983302 ##(Smalltalk.WINDOWPLACEMENT) 8 #[44 0 0 0 0 0 0 0 0 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 79 5 0 0 10 0 0 0 57 7 0 0 8 2 0 0] 98 2 410 8 ##(Smalltalk.ContainerView) 98 15 0 416 98 2 8 1140850688 131073 880 0 0 0 7 0 0 0 880 788230 ##(Smalltalk.BorderLayout) 1 1 410 896 98 15 0 880 98 2 8 1140850688 131073 992 0 0 0 7 0 0 0 992 530 234 240 576 32 234 256 576 590342 ##(Smalltalk.Rectangle) 738 1 41 738 1 1 610 202 208 98 1 674 704 98 2 738 1 1 738 949 139 992 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 218 1 0 0 69 0 0 0] 98 1 410 8 ##(Smalltalk.StaticText) 98 16 0 992 98 2 8 1140850945 65 1328 0 0 0 7 0 263174 ##(Smalltalk.Font) 0 16 459014 ##(Smalltalk.LOGFONT) 8 #[229 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 738 193 193 0 1328 0 8 4294903063 852486 ##(Smalltalk.NullConverter) 0 0 0 610 202 208 98 2 674 704 98 2 738 1 41 738 949 99 1328 674 8 #text: 98 1 8 'Algoritmo Genético' 1328 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 20 0 0 0 218 1 0 0 69 0 0 0] 98 0 738 193 193 0 27 1776 0 27 0 0 0 410 896 98 15 0 880 98 2 8 1140850688 131073 1792 0 0 0 7 0 0 0 1792 530 234 240 576 32 234 256 576 1106 738 1 121 738 1 21 610 202 208 98 1 674 704 98 2 738 1 139 738 949 333 1792 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 69 0 0 0 218 1 0 0 235 0 0 0] 98 1 410 1344 98 16 0 1792 98 2 8 1140850945 65 2112 0 0 0 7 0 0 0 2112 0 8 4294903063 1522 0 0 0 610 202 208 98 2 674 704 98 2 738 1 121 738 949 193 2112 674 1680 98 1 8 'Este programa resuelve esta hecho para la catedra ble, resuelve un ble, de manera ble' 2112 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 60 0 0 0 218 1 0 0 156 0 0 0] 98 0 1776 0 27 1776 0 27 234 256 576 0 610 202 208 98 1 674 704 98 2 738 1 1 738 949 471 880 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 218 1 0 0 235 0 0 0] 98 2 992 1792 1776 0 27 410 896 98 15 0 416 98 2 8 1140850688 131073 2592 0 0 0 7 0 0 0 2592 530 234 240 576 16 234 256 576 0 610 202 208 98 1 674 704 98 2 738 1 471 738 949 473 2592 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 235 0 0 0 218 1 0 0 215 1 0 0] 98 4 410 8 ##(Smalltalk.PushButton) 98 20 0 2592 98 2 8 1140924416 1 2864 0 0 0 7 0 0 0 2864 0 8 4294903051 1180998 4 ##(Smalltalk.CommandDescription) 8 #cargarPoblacionShell 8 'Cargar Población' 1 1 0 0 32 0 0 0 610 202 208 98 2 674 704 98 2 738 1 1 738 949 119 2864 674 1680 98 1 8 'Cargar Población' 2864 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 218 1 0 0 59 0 0 0] 98 0 1776 0 29 410 2880 98 20 0 2592 98 2 8 1140924416 1 3232 0 0 0 7 0 0 0 3232 0 8 4294903051 2962 8 #verPoblacionActualShell 8 'Ver Población Actual' 1 1 0 0 32 0 0 0 610 202 208 98 2 674 704 98 2 738 1 119 738 949 119 3232 674 1680 98 1 8 'Ver Población Actual' 3232 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 59 0 0 0 218 1 0 0 118 0 0 0] 98 0 1776 0 29 410 2880 98 20 0 2592 98 2 8 1140924416 1 3568 0 0 0 7 0 0 0 3568 0 8 4294903051 2962 8 #correrAlgoritmoShell 8 'Correr Algoritmo' 1 1 0 0 32 0 0 0 610 202 208 98 2 674 704 98 2 738 1 237 738 949 119 3568 674 1680 98 1 8 'Correr Algoritmo' 3568 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 118 0 0 0 218 1 0 0 177 0 0 0] 98 0 1776 0 29 410 2880 98 20 0 2592 98 2 8 1140924416 1 3904 0 0 0 7 0 0 0 3904 0 8 4294903051 2962 3664 8 'Ver Crédito' 1 1 0 0 32 0 0 0 610 202 208 98 2 674 704 98 2 738 1 355 738 949 119 3904 674 1680 98 1 8 'Ver Crédito' 3904 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 177 0 0 0 218 1 0 0 236 0 0 0] 98 0 1776 0 29 1776 0 27 1776 0 27 )! !
!ShellAg class categoriesFor: #resource_Default_view!public!resources-views! !

ShellCargarPoblacion guid: (GUID fromString: '{4C589BDE-0251-44F4-B4B8-58230CACA096}')!
ShellCargarPoblacion comment: ''!
!ShellCargarPoblacion categoriesForClass!MVP-Views! !
!ShellCargarPoblacion class methodsFor!

resource_Default_view
	"Answer the literal data from which the 'Default view' resource can be reconstituted.
	DO NOT EDIT OR RECATEGORIZE THIS METHOD.

	If you wish to modify this resource evaluate:
	ViewComposer openOn: (ResourceIdentifier class: self selector: #resource_Default_view)
	"

	^#(#'!!STL' 3 788558 10 ##(Smalltalk.STBViewProxy) 8 ##(Smalltalk.ShellCargarPoblacion) 98 27 0 0 98 2 27131905 131073 416 0 524550 ##(Smalltalk.ColorRef) 8 4278190080 0 39 0 0 0 416 1180166 ##(Smalltalk.ProportionalLayout) 234 240 98 4 410 8 ##(Smalltalk.ContainerView) 98 15 0 416 98 2 8 1140850688 131073 592 0 0 0 7 0 0 0 592 0 234 256 98 0 0 983302 ##(Smalltalk.MessageSequence) 202 208 98 1 721670 ##(Smalltalk.MessageSend) 8 #createAt:extent: 98 2 328198 ##(Smalltalk.Point) 1 277 834 689 133 592 983302 ##(Smalltalk.WINDOWPLACEMENT) 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 138 0 0 0 88 1 0 0 204 0 0 0] 98 2 410 8 ##(Smalltalk.StaticText) 98 16 0 592 98 2 8 1140850944 65 944 0 0 0 7 0 263174 ##(Smalltalk.Font) 0 16 459014 ##(Smalltalk.LOGFONT) 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 834 193 193 0 944 0 8 4294903063 852486 ##(Smalltalk.NullConverter) 0 0 0 706 202 208 98 2 770 800 98 2 834 5 33 834 251 51 944 770 8 #text: 98 1 8 'Dificultad:' 944 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 2 0 0 0 16 0 0 0 127 0 0 0 41 0 0 0] 98 0 834 193 193 0 27 410 8 ##(Smalltalk.ComboBox) 98 17 0 592 98 2 8 1412498947 1025 1408 590662 2 ##(Smalltalk.ListModel) 202 208 688 0 1310726 ##(Smalltalk.IdentitySearchPolicy) 482 8 4278190080 0 7 0 0 0 1408 0 8 4294903067 459270 ##(Smalltalk.Message) 8 #displayString 98 0 688 401 706 202 208 98 1 770 800 98 2 834 345 33 834 341 53 1408 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 172 0 0 0 16 0 0 0 86 1 0 0 42 0 0 0] 98 0 1392 0 27 1392 0 27 524806 ##(Smalltalk.Fraction) 67 69 410 608 98 15 0 416 98 2 8 1140850688 131073 1872 0 0 0 7 0 0 0 1872 530 234 240 688 32 234 256 688 590342 ##(Smalltalk.Rectangle) 834 1 41 834 1 41 706 202 208 98 1 770 800 98 2 834 1 1 834 689 141 1872 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 88 1 0 0 70 0 0 0] 98 2 410 960 98 16 0 1872 98 2 8 1140850944 65 2208 0 0 0 7 0 1026 0 16 1058 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 834 193 193 0 2208 0 8 4294903063 1138 0 0 0 706 202 208 98 2 770 800 98 2 834 1 41 834 345 61 2208 770 1296 98 1 8 'Nombre de la materia:' 2208 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 20 0 0 0 172 0 0 0 50 0 0 0] 98 0 1392 0 27 410 8 ##(Smalltalk.TextEdit) 98 16 0 1872 98 2 8 1140916352 1025 2576 0 482 8 4278190080 0 7 0 0 0 2576 0 8 4294903069 1138 0 0 1 706 202 208 98 3 770 800 98 2 834 345 41 834 345 61 2576 770 8 #selectionRange: 98 1 525062 ##(Smalltalk.Interval) 3 1 3 2576 770 8 #isTextModified: 98 1 32 2576 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 172 0 0 0 20 0 0 0 88 1 0 0 50 0 0 0] 98 0 1392 0 27 1392 0 27 1842 71 69 16 234 256 688 0 0 0 0 0 16963 0 0 0 0 1 0 0 706 202 208 98 3 770 800 98 2 834 2719 21 834 721 761 416 770 1296 98 1 8 'Algoritmo Genético - Cargar Población' 416 770 8 #updateMenuBar 688 416 882 8 #[44 0 0 0 0 0 0 0 0 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 79 5 0 0 10 0 0 0 183 6 0 0 134 1 0 0] 98 5 1872 410 608 98 15 0 416 98 2 8 1140850688 131073 3280 0 0 0 7 0 0 0 3280 788230 ##(Smalltalk.BorderLayout) 1 1 0 0 0 410 960 98 16 0 3280 98 2 8 1140850944 65 3376 0 0 0 7 0 1026 0 16 1058 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 2320 0 3376 0 8 4294903063 1138 0 0 0 706 202 208 98 2 770 800 98 2 834 1 41 834 345 57 3376 770 1296 98 1 8 'Tiene Final?' 3376 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 20 0 0 0 172 0 0 0 48 0 0 0] 98 0 1392 0 27 410 8 ##(Smalltalk.CheckBox) 98 16 0 3280 98 2 8 1409363203 1 3728 721990 2 ##(Smalltalk.ValueHolder) 0 0 1114118 ##(Smalltalk.NeverSearchPolicy) 32 0 0 7 0 0 0 3728 0 8 4294903051 1138 0 0 0 706 202 208 98 2 770 800 98 2 834 345 41 834 345 57 3728 770 1296 98 1 8 'Sí' 3728 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 172 0 0 0 20 0 0 0 88 1 0 0 48 0 0 0] 98 0 1392 0 27 234 256 688 1986 834 1 41 834 1 41 706 202 208 98 1 770 800 98 2 834 1 141 834 689 137 3280 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 70 0 0 0 88 1 0 0 138 0 0 0] 98 2 3376 3728 1392 0 27 592 410 608 98 15 0 416 98 2 8 1140850688 131073 4336 0 0 0 7 0 0 0 4336 0 234 256 688 0 706 202 208 98 1 770 800 98 2 834 1 409 834 689 137 4336 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 204 0 0 0 88 1 0 0 16 1 0 0] 98 2 410 960 98 16 0 4336 98 2 8 1140850944 65 4576 0 0 0 7 0 1026 0 16 1058 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 1104 0 4576 0 8 4294903063 1138 0 0 0 706 202 208 98 2 770 800 98 2 834 11 31 834 241 39 4576 770 1296 98 1 8 'Día de la semana:' 4576 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 5 0 0 0 15 0 0 0 125 0 0 0 34 0 0 0] 98 0 1392 0 27 410 1424 98 17 0 4336 98 2 8 1412498947 1025 4928 1490 202 208 688 0 1552 482 1584 0 7 0 0 0 4928 0 8 4294903067 1618 1648 98 0 688 401 706 202 208 98 1 770 800 98 2 834 345 31 834 341 53 4928 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 172 0 0 0 15 0 0 0 86 1 0 0 41 0 0 0] 98 0 1392 0 27 1392 0 27 410 608 98 15 0 416 98 2 8 1140850688 131073 5248 0 0 0 7 0 0 0 5248 530 234 240 688 32 234 256 688 0 706 202 208 98 1 770 800 98 2 834 1 545 834 689 139 5248 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 16 1 0 0 88 1 0 0 85 1 0 0] 98 2 410 8 ##(Smalltalk.PushButton) 98 20 0 5248 98 2 8 1140924416 1 5520 0 0 0 7 0 0 0 5520 0 8 4294903051 1180998 4 ##(Smalltalk.CommandDescription) 8 #guardarMateria 8 'Guardar' 1 1 0 0 16 0 0 0 706 202 208 98 3 770 800 98 2 834 1 1 834 345 139 5520 770 8 #isEnabled: 98 1 32 5520 770 1296 98 1 8 'Guardar' 5520 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 172 0 0 0 69 0 0 0] 98 0 1392 0 29 410 5536 98 20 0 5248 98 2 8 1140924416 1 5936 0 0 0 7 0 0 0 5936 0 8 4294903051 5618 8 #cancel 8 '&Cancelar' 1 1 0 0 32 0 0 0 706 202 208 98 3 770 800 98 2 834 345 1 834 345 139 5936 770 5808 98 1 32 5936 770 1296 98 1 8 '&Cancelar' 5936 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 172 0 0 0 0 0 0 0 88 1 0 0 69 0 0 0] 98 0 1392 0 29 1392 0 27 1392 0 27 )! !
!ShellCargarPoblacion class categoriesFor: #resource_Default_view!public!resources-views! !

ShellViewPoblacionActual guid: (GUID fromString: '{BB014510-29C6-4570-983D-198D5D2C2850}')!
ShellViewPoblacionActual comment: ''!
!ShellViewPoblacionActual categoriesForClass!MVP-Views! !
!ShellViewPoblacionActual class methodsFor!

resource_Default_view
	"Answer the literal data from which the 'Default view' resource can be reconstituted.
	DO NOT EDIT OR RECATEGORIZE THIS METHOD.

	If you wish to modify this resource evaluate:
	ViewComposer openOn: (ResourceIdentifier class: self selector: #resource_Default_view)
	"

	^#(#'!!STL' 3 788558 10 ##(Smalltalk.STBViewProxy) 8 ##(Smalltalk.ShellViewPoblacionActual) 98 27 0 0 98 2 27131905 131073 416 0 524550 ##(Smalltalk.ColorRef) 8 4278190080 0 39 0 0 0 416 788230 ##(Smalltalk.BorderLayout) 1 1 0 0 0 410 8 ##(Smalltalk.ContainerView) 98 15 0 416 98 2 8 1140850688 131073 560 0 0 0 7 0 0 0 560 1180166 ##(Smalltalk.ProportionalLayout) 234 240 98 0 32 234 256 688 0 983302 ##(Smalltalk.MessageSequence) 202 208 98 1 721670 ##(Smalltalk.MessageSend) 8 #createAt:extent: 98 2 328198 ##(Smalltalk.Point) 1 1 850 321 943 560 983302 ##(Smalltalk.WINDOWPLACEMENT) 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 160 0 0 0 215 1 0 0] 98 1 410 8 ##(Smalltalk.ListBox) 98 17 0 560 98 2 8 1412497665 1025 960 590662 2 ##(Smalltalk.ListModel) 202 208 688 0 1310726 ##(Smalltalk.IdentitySearchPolicy) 482 8 4278190080 0 7 0 0 0 960 0 8 4294903315 459270 ##(Smalltalk.Message) 8 #displayString 98 0 688 32 722 202 208 98 2 786 816 98 2 850 1 1 850 321 943 960 786 8 #horizontalExtent: 98 1 1 960 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 160 0 0 0 215 1 0 0] 98 0 850 193 193 0 27 1440 0 27 410 576 98 15 0 416 98 2 8 1140850688 131073 1456 0 0 0 7 0 0 0 1456 530 1 1 0 410 576 98 15 0 1456 98 2 8 1140850688 131073 1536 0 0 0 7 0 0 0 1536 642 234 240 688 32 234 256 688 0 722 202 208 98 1 786 816 98 2 850 1 853 850 559 91 1536 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 170 1 0 0 23 1 0 0 215 1 0 0] 98 1 410 8 ##(Smalltalk.PushButton) 98 20 0 1536 98 2 8 1140924416 1 1808 0 0 0 7 0 0 0 1808 0 8 4294903051 1180998 4 ##(Smalltalk.CommandDescription) 8 #borrarMateria 8 'Borrar' 1 1 0 0 16 0 0 0 722 202 208 98 3 786 816 98 2 850 1 1 850 559 91 1808 786 8 #isEnabled: 98 1 32 1808 786 8 #text: 98 1 8 'Borrar' 1808 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 23 1 0 0 45 0 0 0] 98 0 1440 0 29 1440 0 27 0 0 410 576 98 15 0 1456 98 2 8 1140850688 131073 2240 0 0 0 7 0 0 0 2240 642 234 240 688 16 234 256 688 0 722 202 208 98 1 786 816 98 2 850 1 1 850 559 853 2240 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 23 1 0 0 170 1 0 0] 98 4 410 576 98 15 0 2240 98 2 8 1140850688 131073 2512 0 0 0 7 0 0 0 2512 642 234 240 688 32 234 256 98 2 410 8 ##(Smalltalk.StaticText) 98 16 0 2512 98 2 8 1140850945 65 2640 0 0 0 7 0 263174 ##(Smalltalk.Font) 0 16 459014 ##(Smalltalk.LOGFONT) 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 850 193 193 0 2640 0 8 4294903063 852486 ##(Smalltalk.NullConverter) 0 0 0 722 202 208 98 2 786 816 98 2 850 289 41 850 271 133 2640 786 2144 98 1 8 'nombre' 2640 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 144 0 0 0 20 0 0 0 23 1 0 0 86 0 0 0] 98 0 1440 0 27 8 'labelNombreMateria' 590342 ##(Smalltalk.Rectangle) 850 21 41 850 1 41 722 202 208 98 1 786 816 98 2 850 1 1 850 559 213 2512 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 23 1 0 0 106 0 0 0] 98 2 410 2656 98 16 0 2512 98 2 8 1140850944 65 3312 0 0 0 7 0 2722 0 16 2754 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 850 193 193 0 3312 0 8 4294903063 2834 0 0 0 722 202 208 98 2 786 816 98 2 850 21 41 850 269 133 3312 786 2144 98 1 8 'Nombre de la materia:' 3312 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 10 0 0 0 20 0 0 0 144 0 0 0 86 0 0 0] 98 0 1440 0 27 2640 1440 0 27 410 576 98 15 0 2240 98 2 8 1140850688 131073 3680 0 0 0 7 0 0 0 3680 642 234 240 688 32 234 256 98 2 410 2656 98 16 0 3680 98 2 8 1140850945 65 3808 0 0 0 7 0 2722 0 16 2754 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 850 193 193 0 3808 0 8 4294903063 2834 0 0 0 722 202 208 98 2 786 816 98 2 850 289 41 850 271 173 3808 786 2144 98 1 8 'dificultad' 3808 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 144 0 0 0 20 0 0 0 23 1 0 0 106 0 0 0] 98 0 1440 0 27 8 'labelDificultad' 3090 850 21 41 850 1 1 722 202 208 98 1 786 816 98 2 850 1 213 850 559 213 3680 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 106 0 0 0 23 1 0 0 212 0 0 0] 98 2 410 2656 98 16 0 3680 98 2 8 1140850944 65 4400 0 0 0 7 0 2722 0 16 2754 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 850 193 193 0 4400 0 8 4294903063 2834 0 0 0 722 202 208 98 2 786 816 98 2 850 21 41 850 269 173 4400 786 2144 98 1 8 'Dificultad:' 4400 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 10 0 0 0 20 0 0 0 144 0 0 0 106 0 0 0] 98 0 1440 0 27 3808 1440 0 27 410 576 98 15 0 2240 98 2 8 1140850688 131073 4768 0 0 0 7 0 0 0 4768 642 234 240 688 32 234 256 98 2 410 2656 98 16 0 4768 98 2 8 1140850945 65 4896 0 0 0 7 0 0 0 4896 0 8 4294903063 2834 0 0 0 722 202 208 98 2 786 816 98 2 850 289 41 850 271 133 4896 786 2144 98 1 8 'SioNo' 4896 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 144 0 0 0 20 0 0 0 23 1 0 0 86 0 0 0] 98 0 1440 0 27 8 'labelTieneFinal' 3090 850 21 41 850 1 41 722 202 208 98 1 786 816 98 2 850 1 425 850 559 213 4768 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 212 0 0 0 23 1 0 0 62 1 0 0] 98 2 410 2656 98 16 0 4768 98 2 8 1140850944 65 5424 0 0 0 7 0 2722 0 16 2754 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 850 193 193 0 5424 0 8 4294903063 2834 0 0 0 722 202 208 98 2 786 816 98 2 850 21 41 850 269 133 5424 786 2144 98 1 8 'Tiene Final?' 5424 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 10 0 0 0 20 0 0 0 144 0 0 0 86 0 0 0] 98 0 1440 0 27 4896 1440 0 27 410 576 98 15 0 2240 98 2 8 1140850688 131073 5792 0 0 0 7 0 0 0 5792 642 234 240 688 32 234 256 98 2 410 2656 98 16 0 5792 98 2 8 1140850945 65 5920 0 0 0 7 0 0 0 5920 0 8 4294903063 2834 0 0 0 722 202 208 98 2 786 816 98 2 850 289 41 850 271 177 5920 786 2144 98 1 8 'unDia' 5920 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 144 0 0 0 20 0 0 0 23 1 0 0 108 0 0 0] 98 0 1440 0 27 8 'labelDiaSemana' 3090 850 21 41 850 1 1 722 202 208 98 1 786 816 98 2 850 1 637 850 559 217 5792 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 62 1 0 0 23 1 0 0 170 1 0 0] 98 2 410 2656 98 16 0 5792 98 2 8 1140850944 65 6448 0 0 0 7 0 2722 0 16 2754 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 850 193 193 0 6448 0 8 4294903063 2834 0 0 0 722 202 208 98 2 786 816 98 2 850 21 41 850 269 177 6448 786 2144 98 1 8 'Día de la semana:' 6448 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 10 0 0 0 20 0 0 0 144 0 0 0 108 0 0 0] 98 0 1440 0 27 5920 1440 0 27 1440 0 27 234 256 688 0 722 202 208 98 1 786 816 98 2 850 321 1 850 559 943 1456 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 160 0 0 0 0 0 0 0 183 1 0 0 215 1 0 0] 98 2 2240 1536 1440 0 27 234 256 688 0 0 0 0 0 18139 0 0 0 0 1 0 0 722 202 208 98 3 786 816 98 2 850 2719 21 850 911 1021 416 786 2144 98 1 8 'Algoritmo Genético - Genes De La Poblacion Actual ' 416 786 8 #updateMenuBar 688 416 898 8 #[44 0 0 0 0 0 0 0 0 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 79 5 0 0 10 0 0 0 22 7 0 0 8 2 0 0] 98 2 560 1456 1440 0 27 )! !
!ShellViewPoblacionActual class categoriesFor: #resource_Default_view!public!resources-views! !

"Binary Globals"!

