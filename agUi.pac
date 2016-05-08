| package |
package := Package name: 'agUi'.
package paxVersion: 1;
	basicComment: ''.


package classNames
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
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\Base\Dolphin';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Presenters\Boolean\Dolphin Boolean Presenter';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Models\List\Dolphin List Models';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Presenters\List\Dolphin List Presenter';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Base\Dolphin MVP Base';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Presenters\Number\Dolphin Number Presenter';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Views\Styled Views\Dolphin Styled Views';
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
	(File exists: 'poblacion') ifTrue: [ self model cargarPoblacion].!

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

	^#(#'!!STL' 3 788558 10 ##(Smalltalk.STBViewProxy) 8 ##(Smalltalk.ShellView) 98 27 0 0 98 2 27131905 131073 416 0 524550 ##(Smalltalk.ColorRef) 8 4278190080 0 551 0 0 0 416 1180166 ##(Smalltalk.ProportionalLayout) 234 240 98 0 16 234 256 576 0 0 0 0 0 1 0 0 0 0 1 0 0 983302 ##(Smalltalk.MessageSequence) 202 208 98 2 721670 ##(Smalltalk.MessageSend) 8 #createAt:extent: 98 2 328198 ##(Smalltalk.Point) 2719 21 738 1201 801 416 674 8 #updateMenuBar 576 416 983302 ##(Smalltalk.WINDOWPLACEMENT) 8 #[44 0 0 0 0 0 0 0 0 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 79 5 0 0 10 0 0 0 167 7 0 0 154 1 0 0] 98 2 410 8 ##(Smalltalk.ContainerView) 98 15 0 416 98 2 8 1140850688 131073 880 0 0 0 7 0 0 0 880 788230 ##(Smalltalk.BorderLayout) 1 1 410 896 98 15 0 880 98 2 8 1140850688 131073 992 0 0 0 7 0 0 0 992 530 234 240 576 32 234 256 576 590342 ##(Smalltalk.Rectangle) 738 1 41 738 1 1 610 202 208 98 1 674 704 98 2 738 1 1 738 1169 139 992 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 72 2 0 0 69 0 0 0] 98 1 410 8 ##(Smalltalk.StaticText) 98 16 0 992 98 2 8 1140850945 65 1328 0 0 0 7 0 263174 ##(Smalltalk.Font) 0 16 459014 ##(Smalltalk.LOGFONT) 8 #[229 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 738 193 193 0 1328 0 8 4294904093 852486 ##(Smalltalk.NullConverter) 0 0 0 610 202 208 98 2 674 704 98 2 738 1 41 738 1169 99 1328 674 8 #text: 98 1 8 'Algoritmo Genético' 1328 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 20 0 0 0 72 2 0 0 69 0 0 0] 98 0 738 193 193 0 27 1776 0 27 0 0 0 410 896 98 15 0 880 98 2 8 1140850688 131073 1792 0 0 0 7 0 0 0 1792 530 234 240 576 32 234 256 576 1106 738 1 121 738 1 21 610 202 208 98 1 674 704 98 2 738 1 139 738 1169 223 1792 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 69 0 0 0 72 2 0 0 180 0 0 0] 98 1 410 1344 98 16 0 1792 98 2 8 1140850945 65 2112 0 0 0 7 0 0 0 2112 0 8 4294904093 1522 0 0 0 610 202 208 98 2 674 704 98 2 738 1 121 738 1169 83 2112 674 1680 98 1 8 'Este programa resuelve esta hecho para la catedra ble, resuelve un ble, de manera ble' 2112 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 60 0 0 0 72 2 0 0 101 0 0 0] 98 0 1776 0 27 1776 0 27 234 256 576 0 610 202 208 98 1 674 704 98 2 738 1 1 738 1169 361 880 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 72 2 0 0 180 0 0 0] 98 2 992 1792 1776 0 27 410 896 98 15 0 416 98 2 8 1140850688 131073 2592 0 0 0 7 0 0 0 2592 530 234 240 576 16 234 256 576 0 610 202 208 98 1 674 704 98 2 738 1 361 738 1169 363 2592 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 180 0 0 0 72 2 0 0 105 1 0 0] 98 4 410 8 ##(Smalltalk.PushButton) 98 20 0 2592 98 2 8 1140924416 1 2864 0 0 0 7 0 0 0 2864 0 8 4294904113 1180998 4 ##(Smalltalk.CommandDescription) 8 #cargarPoblacionShell 8 'Cargar Población' 1 1 0 0 32 0 0 0 610 202 208 98 2 674 704 98 2 738 1 1 738 1169 91 2864 674 1680 98 1 8 'Cargar Población' 2864 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 72 2 0 0 45 0 0 0] 98 0 1776 0 29 410 2880 98 20 0 2592 98 2 8 1140924416 1 3232 0 0 0 7 0 0 0 3232 0 8 4294904113 2962 8 #verPoblacionActualShell 8 'Ver Población Actual' 1 1 0 0 32 0 0 0 610 202 208 98 2 674 704 98 2 738 1 91 738 1169 91 3232 674 1680 98 1 8 'Ver Población Actual' 3232 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 45 0 0 0 72 2 0 0 90 0 0 0] 98 0 1776 0 29 410 2880 98 20 0 2592 98 2 8 1140924416 1 3568 0 0 0 7 0 0 0 3568 0 8 4294904113 2962 8 #correrAlgoritmoShell 8 'Correr Algoritmo' 1 1 0 0 32 0 0 0 610 202 208 98 2 674 704 98 2 738 1 181 738 1169 91 3568 674 1680 98 1 8 'Correr Algoritmo' 3568 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 90 0 0 0 72 2 0 0 135 0 0 0] 98 0 1776 0 29 410 2880 98 20 0 2592 98 2 8 1140924416 1 3904 0 0 0 7 0 0 0 3904 0 8 4294904113 2962 3664 8 'Ver Crédito' 1 1 0 0 32 0 0 0 610 202 208 98 2 674 704 98 2 738 1 271 738 1169 93 3904 674 1680 98 1 8 'Ver Crédito' 3904 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 135 0 0 0 72 2 0 0 181 0 0 0] 98 0 1776 0 29 1776 0 27 1776 0 27 )! !
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
	self halt.
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

	^#(#'!!STL' 3 788558 10 ##(Smalltalk.STBViewProxy) 8 ##(Smalltalk.ShellView) 98 27 0 0 98 2 26214401 131073 416 0 524550 ##(Smalltalk.ColorRef) 8 4278190080 0 39 0 0 0 416 1180166 ##(Smalltalk.ProportionalLayout) 234 240 98 0 16 234 256 576 0 0 0 0 0 13219 0 0 0 0 1 0 0 983302 ##(Smalltalk.MessageSequence) 202 208 98 2 721670 ##(Smalltalk.MessageSend) 8 #createAt:extent: 98 2 328198 ##(Smalltalk.Point) 2731 21 738 721 801 416 674 8 #updateMenuBar 576 416 983302 ##(Smalltalk.WINDOWPLACEMENT) 8 #[44 0 0 0 0 0 0 0 0 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 85 5 0 0 10 0 0 0 189 6 0 0 154 1 0 0] 98 5 410 8 ##(Smalltalk.ContainerView) 98 15 0 416 98 2 8 1140850688 131073 880 0 0 0 7 0 0 0 880 530 234 240 576 32 234 256 98 2 410 8 ##(Smalltalk.TextEdit) 98 16 0 880 98 2 8 1140916352 1025 1024 0 482 8 4278190080 0 7 0 0 0 1024 0 8 4294902755 852486 ##(Smalltalk.NullConverter) 0 0 1 610 202 208 98 3 674 704 98 2 738 355 41 738 355 69 1024 674 8 #selectionRange: 98 1 525062 ##(Smalltalk.Interval) 3 1 3 1024 674 8 #isTextModified: 98 1 32 1024 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 177 0 0 0 20 0 0 0 98 1 0 0 54 0 0 0] 98 0 738 193 193 0 27 8 'textBoxNombreMateria' 590342 ##(Smalltalk.Rectangle) 738 1 41 738 1 41 610 202 208 98 1 674 704 98 2 738 1 1 738 709 149 880 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 98 1 0 0 74 0 0 0] 98 2 410 8 ##(Smalltalk.StaticText) 98 16 0 880 98 2 8 1140850944 65 1728 0 0 0 7 0 263174 ##(Smalltalk.Font) 0 16 459014 ##(Smalltalk.LOGFONT) 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 738 193 193 0 1728 0 8 4294903325 1154 0 0 0 610 202 208 98 2 674 704 98 2 738 1 41 738 355 69 1728 674 8 #text: 98 1 8 'Nombre de la materia:' 1728 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 20 0 0 0 177 0 0 0 54 0 0 0] 98 0 1472 0 27 1024 1472 0 27 410 896 98 15 0 416 98 2 8 1140850688 131073 2160 0 0 0 7 0 0 0 2160 788230 ##(Smalltalk.BorderLayout) 1 1 0 0 0 410 1744 98 16 0 2160 98 2 8 1140850944 65 2256 0 0 0 7 0 1810 0 16 1842 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 738 193 193 0 2256 0 8 4294903325 1154 0 0 0 610 202 208 98 2 674 704 98 2 738 1 41 738 345 69 2256 674 2064 98 1 8 'Tiene Final?' 2256 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 20 0 0 0 172 0 0 0 54 0 0 0] 98 0 1472 0 27 410 8 ##(Smalltalk.CheckBox) 98 16 0 2160 98 2 8 1409363203 1 2624 721990 2 ##(Smalltalk.ValueHolder) 0 0 1114118 ##(Smalltalk.NeverSearchPolicy) 32 0 0 7 0 0 0 2624 0 8 4294903029 1154 0 0 0 610 202 208 98 2 674 704 98 2 738 345 41 738 365 69 2624 674 2064 98 1 8 'Sí' 2624 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 172 0 0 0 20 0 0 0 98 1 0 0 54 0 0 0] 98 0 1472 0 27 234 256 98 2 2624 8 'checkBoxFinal' 1506 738 1 41 738 1 41 610 202 208 98 1 674 704 98 2 738 1 149 738 709 149 2160 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 74 0 0 0 98 1 0 0 148 0 0 0] 98 2 2256 2624 1472 0 27 410 896 98 15 0 416 98 2 8 1140850688 131073 3264 0 0 0 7 0 0 0 3264 0 234 256 98 2 410 8 ##(Smalltalk.ComboBox) 98 17 0 3264 98 2 8 1412498947 1025 3360 590662 2 ##(Smalltalk.ListModel) 202 208 576 0 1310726 ##(Smalltalk.IdentitySearchPolicy) 482 8 4278190080 0 7 0 0 0 3360 0 8 4294902769 459270 ##(Smalltalk.Message) 8 #displayString 98 0 576 401 610 202 208 98 1 674 704 98 2 738 345 33 738 341 53 3360 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 172 0 0 0 16 0 0 0 86 1 0 0 42 0 0 0] 98 0 1472 0 27 8 'comboBoxDificultad' 0 610 202 208 98 1 674 704 98 2 738 1 297 738 709 149 3264 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 148 0 0 0 98 1 0 0 222 0 0 0] 98 2 410 1744 98 16 0 3264 98 2 8 1140850944 65 3968 0 0 0 7 0 1810 0 16 1842 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 738 193 193 0 3968 0 8 4294903325 1154 0 0 0 610 202 208 98 2 674 704 98 2 738 5 33 738 251 51 3968 674 2064 98 1 8 'Dificultad:' 3968 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 2 0 0 0 16 0 0 0 127 0 0 0 41 0 0 0] 98 0 1472 0 27 3360 1472 0 27 410 896 98 15 0 416 98 2 8 1140850688 131073 4336 0 0 0 7 0 0 0 4336 0 234 256 98 2 410 3376 98 17 0 4336 98 2 8 1412498947 1025 4432 3442 202 208 576 0 3504 482 3536 0 7 0 0 0 4432 0 8 4294902769 3570 3600 98 0 576 401 610 202 208 98 1 674 704 98 2 738 345 31 738 341 53 4432 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 172 0 0 0 15 0 0 0 86 1 0 0 41 0 0 0] 98 0 1472 0 27 8 'comboBoxDiaSemana' 0 610 202 208 98 1 674 704 98 2 738 1 445 738 709 149 4336 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 222 0 0 0 98 1 0 0 40 1 0 0] 98 2 410 1744 98 16 0 4336 98 2 8 1140850944 65 4928 0 0 0 7 0 1810 0 16 1842 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 738 193 193 0 4928 0 8 4294903325 1154 0 0 0 610 202 208 98 2 674 704 98 2 738 11 31 738 241 39 4928 674 2064 98 1 8 'Día de la semana:' 4928 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 5 0 0 0 15 0 0 0 125 0 0 0 34 0 0 0] 98 0 1472 0 27 4432 1472 0 27 410 896 98 15 0 416 98 2 8 1140850688 131073 5296 0 0 0 7 0 0 0 5296 530 234 240 576 32 234 256 576 0 610 202 208 98 1 674 704 98 2 738 1 593 738 709 151 5296 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 40 1 0 0 98 1 0 0 115 1 0 0] 98 2 410 8 ##(Smalltalk.PushButton) 98 20 0 5296 98 2 8 1140924416 1 5568 0 0 0 7 0 0 0 5568 0 8 4294903029 1180998 4 ##(Smalltalk.CommandDescription) 8 #guardarMateria 8 'Guardar' 1 1 0 0 16 0 0 0 610 202 208 98 3 674 704 98 2 738 1 1 738 355 151 5568 674 8 #isEnabled: 98 1 32 5568 674 2064 98 1 8 'Guardar' 5568 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 177 0 0 0 75 0 0 0] 98 0 1472 0 29 410 5584 98 20 0 5296 98 2 8 1140924416 1 5984 0 0 0 7 0 0 0 5984 0 8 4294903029 5666 8 #cancel 8 '&Cancelar' 1 1 0 0 32 0 0 0 610 202 208 98 3 674 704 98 2 738 355 1 738 355 151 5984 674 5856 98 1 32 5984 674 2064 98 1 8 '&Cancelar' 5984 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 177 0 0 0 0 0 0 0 98 1 0 0 75 0 0 0] 98 0 1472 0 29 1472 0 27 1472 0 27 )! !
!ShellCargarPoblacionPresenter class categoriesFor: #resource_Default_view!public!resources-views! !

ShellCorrerAlgoritmo guid: (GUID fromString: '{042AED47-A19D-4EE2-9E89-179100A7F285}')!
ShellCorrerAlgoritmo comment: ''!
!ShellCorrerAlgoritmo categoriesForClass!MVP-Presenters! !
!ShellCorrerAlgoritmo methodsFor!

correrAlgoritmo
	self model generanPoblacionInicial: ctrlNumeroPoblacionInicial value.
	ctrlNumeroDeCorridas value timesRepeat: 
			[self halt.
			self model seleccion.
			self model cruzamiento.
			self model mutacionConProbabilidad: ctrlProbabilidadMutacion value]!

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
	ctrlProbabilidadMutacion := anObject! !
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

!ShellCorrerAlgoritmo class methodsFor!

resource_Default_view
	"Answer the literal data from which the 'Default view' resource can be reconstituted.
	DO NOT EDIT OR RECATEGORIZE THIS METHOD.

	If you wish to modify this resource evaluate:
	ViewComposer openOn: (ResourceIdentifier class: self selector: #resource_Default_view)
	"

	^#(#'!!STL' 3 788558 10 ##(Smalltalk.STBViewProxy) 8 ##(Smalltalk.ShellView) 98 27 0 0 98 2 27131905 131073 416 0 524550 ##(Smalltalk.ColorRef) 8 4278190080 0 551 0 0 0 416 1180166 ##(Smalltalk.ProportionalLayout) 234 240 98 0 32 234 256 98 2 410 8 ##(Smalltalk.StyledContainer) 98 22 0 416 98 2 8 1174405120 131073 624 0 0 0 7 0 0 0 624 0 234 256 576 0 202 208 98 4 8 #top 8 #bottom 8 #left 8 #right 590598 ##(Smalltalk.StyledPen) 786694 ##(Smalltalk.IndexedColor) 33554433 5 98 1 3 1246214 ##(Smalltalk.StyledGradientBrush) 721158 ##(Smalltalk.SystemColor) 31 0 328198 ##(Smalltalk.Point) 327734 ##(Smalltalk.Float) 8 0 0 0 0 0 0 224 63 1 962 994 8 0 0 0 0 0 0 224 63 3 98 4 41 41 41 41 16 0 1 983302 ##(Smalltalk.MessageSequence) 202 208 98 1 721670 ##(Smalltalk.MessageSend) 8 #createAt:extent: 98 2 962 1 1 962 533 739 624 983302 ##(Smalltalk.WINDOWPLACEMENT) 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 10 1 0 0 113 1 0 0] 98 0 962 193 193 0 27 8 'conteinerResultado' 0 0 0 0 0 1 0 0 0 0 1 0 0 1074 202 208 98 3 1138 1168 98 2 962 2731 21 962 1081 801 416 1138 8 #text: 98 1 8 'Correr el Algoritmo - Algoritmo Genético' 416 1138 8 #updateMenuBar 576 416 1234 8 #[44 0 0 0 0 0 0 0 0 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 85 5 0 0 10 0 0 0 113 7 0 0 154 1 0 0] 98 2 624 410 8 ##(Smalltalk.ContainerView) 98 15 0 416 98 2 8 1140850688 131073 1584 0 0 0 7 0 0 0 1584 530 234 240 98 4 410 1600 98 15 0 1584 98 2 8 1140850688 131073 1712 0 0 0 7 0 0 0 1712 530 234 240 576 32 234 256 576 0 1074 202 208 98 1 1138 1168 98 2 962 1 553 962 533 187 1712 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 20 1 0 0 10 1 0 0 113 1 0 0] 98 1 410 8 ##(Smalltalk.PushButton) 98 20 0 1712 98 2 8 1140924416 1 1984 0 0 0 7 0 0 0 1984 0 8 4294902864 1180998 4 ##(Smalltalk.CommandDescription) 8 #correrAlgoritmo 8 'Correr' 1 1 0 0 32 0 0 0 1074 202 208 98 3 1138 1168 98 2 962 1 1 962 533 187 1984 1138 8 #isEnabled: 98 1 32 1984 1138 1456 98 1 8 'Correr' 1984 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 10 1 0 0 93 0 0 0] 98 0 1296 0 29 1296 0 27 524806 ##(Smalltalk.Fraction) 369 371 410 1600 98 15 0 1584 98 2 8 1140850688 131073 2432 0 0 0 7 0 0 0 2432 0 234 256 98 2 410 8 ##(Smalltalk.TextEdit) 98 16 0 2432 98 2 8 1140916224 1025 2528 0 482 8 4278190080 0 7 0 0 0 2528 0 8 4294902856 787206 ##(Smalltalk.NumberToText) 0 8 '' 0 1 1074 202 208 98 3 1138 1168 98 2 962 411 11 962 51 41 2528 1138 8 #selectionRange: 98 1 525062 ##(Smalltalk.Interval) 3 1 3 2528 1138 8 #isTextModified: 98 1 32 2528 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 205 0 0 0 5 0 0 0 230 0 0 0 25 0 0 0] 98 0 1296 0 27 8 'boxProbabilidadDeMutacion' 0 1074 202 208 98 1 1138 1168 98 2 962 1 185 962 533 185 2432 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 92 0 0 0 10 1 0 0 184 0 0 0] 98 3 410 8 ##(Smalltalk.StaticText) 98 16 0 2432 98 2 8 1140850944 65 3168 0 0 0 7 0 0 0 3168 0 8 4294902852 852486 ##(Smalltalk.NullConverter) 0 0 0 1074 202 208 98 2 1138 1168 98 2 962 11 3 962 311 41 3168 1138 1456 98 1 8 'Probabilidad De Mutación' 3168 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 5 0 0 0 1 0 0 0 160 0 0 0 21 0 0 0] 98 0 1296 0 27 2528 410 3184 98 16 0 2432 98 2 8 1140850944 65 3504 0 0 0 7 0 0 0 3504 0 8 4294902852 3266 0 0 0 1074 202 208 98 2 1138 1168 98 2 962 471 11 962 31 31 3504 1138 1456 98 1 8 '%' 3504 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 235 0 0 0 5 0 0 0 250 0 0 0 20 0 0 0] 98 0 1296 0 27 1296 0 27 2402 373 371 16 234 256 576 0 1074 202 208 98 1 1138 1168 98 2 962 533 1 962 533 739 1584 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 10 1 0 0 0 0 0 0 20 2 0 0 113 1 0 0] 98 4 410 1600 98 15 0 1584 98 2 8 1140850688 131073 4000 0 0 0 7 0 0 0 4000 0 234 256 98 4 410 2544 98 16 0 4000 98 2 8 1140916224 1025 4096 0 482 8 4278190080 0 7 0 0 0 4096 0 8 4294902856 2658 0 8 '' 0 1 1074 202 208 98 3 1138 1168 98 2 962 411 51 962 71 41 4096 1138 2832 98 1 2866 3 1 3 4096 1138 2912 98 1 32 4096 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 205 0 0 0 25 0 0 0 240 0 0 0 45 0 0 0] 98 0 1296 0 27 8 'boxNumCorridas' 410 2544 98 16 0 4000 98 2 8 1140916224 1025 4496 0 482 4176 0 7 0 0 0 4496 0 8 4294902856 2658 0 8 '' 0 1 1074 202 208 98 3 1138 1168 98 2 962 411 111 962 71 41 4496 1138 2832 98 1 2866 3 1 3 4496 1138 2912 98 1 32 4496 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 205 0 0 0 55 0 0 0 240 0 0 0 75 0 0 0] 98 0 1296 0 27 8 'boxCantidadDePoblacionInicial' 0 1074 202 208 98 1 1138 1168 98 2 962 1 1 962 533 185 4000 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 10 1 0 0 92 0 0 0] 98 4 410 3184 98 16 0 4000 98 2 8 1140850944 65 5040 0 0 0 7 0 0 0 5040 0 8 4294902852 3266 0 0 0 1074 202 208 98 2 1138 1168 98 2 962 11 51 962 241 39 5040 1138 1456 98 1 8 'Número de Corridas' 5040 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 5 0 0 0 25 0 0 0 125 0 0 0 44 0 0 0] 98 0 1296 0 27 4096 410 3184 98 16 0 4000 98 2 8 1140850944 65 5344 0 0 0 7 0 0 0 5344 0 8 4294902852 3266 0 0 0 1074 202 208 98 2 1138 1168 98 2 962 11 111 962 351 41 5344 1138 1456 98 1 8 'Cantidad de Poblacion Inicial' 5344 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 5 0 0 0 55 0 0 0 180 0 0 0 75 0 0 0] 98 0 1296 0 27 4496 1296 0 27 2432 410 1600 98 15 0 1584 98 2 8 1140850688 131073 5648 0 0 0 7 0 0 0 5648 0 234 256 576 0 1074 202 208 98 1 1138 1168 98 2 962 1 369 962 533 185 5648 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 184 0 0 0 10 1 0 0 20 1 0 0] 98 0 1296 0 27 1712 1296 0 27 1296 0 27 )! !
!ShellCorrerAlgoritmo class categoriesFor: #resource_Default_view!public!resources-views! !

ShellPoblacionActualPresenter guid: (GUID fromString: '{F5AC67BD-7BDE-4475-82F8-E5031EC3631A}')!
ShellPoblacionActualPresenter comment: ''!
!ShellPoblacionActualPresenter categoriesForClass!MVP-Presenters! !
!ShellPoblacionActualPresenter methodsFor!

borrarMateria
	self model poblacionMundial remove: listaMaterias selection.
	self listaMaterias list: self model poblacionMundial.
	self listaMaterias view refreshContents.!

cargarInfoMateria
	ctrlNombreMateria value: listaMaterias selection nombre.
	ctrlLabelFinal value: listaMaterias selection final.
	ctrlLabelDificultad value: listaMaterias selection dificultad.
	ctrlLabelDiaSemana value: listaMaterias selection dia.
	!

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

	^#(#'!!STL' 3 788558 10 ##(Smalltalk.STBViewProxy) 8 ##(Smalltalk.ShellView) 98 27 0 0 98 2 26214401 131073 416 0 524550 ##(Smalltalk.ColorRef) 8 4278190080 0 39 0 0 0 416 788230 ##(Smalltalk.BorderLayout) 1 1 0 0 0 410 8 ##(Smalltalk.ContainerView) 98 15 0 416 98 2 8 1140850688 131073 560 0 0 0 7 0 0 0 560 1180166 ##(Smalltalk.ProportionalLayout) 234 240 98 0 32 234 256 98 2 410 8 ##(Smalltalk.ListBox) 98 17 0 560 98 2 8 1412497665 1025 736 590662 2 ##(Smalltalk.ListModel) 202 208 688 0 1310726 ##(Smalltalk.IdentitySearchPolicy) 482 8 4278190080 0 7 0 0 0 736 0 8 4294902979 459270 ##(Smalltalk.Message) 8 #displayString 98 0 688 32 983302 ##(Smalltalk.MessageSequence) 202 208 98 2 721670 ##(Smalltalk.MessageSend) 8 #createAt:extent: 98 2 328198 ##(Smalltalk.Point) 1 1 1138 321 723 736 1074 8 #horizontalExtent: 98 1 1 736 983302 ##(Smalltalk.WINDOWPLACEMENT) 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 160 0 0 0 105 1 0 0] 98 0 1138 193 193 0 27 8 'boxListaMaterias' 0 1010 202 208 98 1 1074 1104 98 2 1138 1 1 1138 321 723 560 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 160 0 0 0 105 1 0 0] 98 1 736 1296 0 27 410 576 98 15 0 416 98 2 8 1140850688 131073 1488 0 0 0 7 0 0 0 1488 530 1 1 0 410 576 98 15 0 1488 98 2 8 1140850688 131073 1568 0 0 0 7 0 0 0 1568 642 234 240 688 32 234 256 688 0 1010 202 208 98 1 1074 1104 98 2 1138 1 633 1138 519 91 1568 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 60 1 0 0 3 1 0 0 105 1 0 0] 98 1 410 8 ##(Smalltalk.PushButton) 98 20 0 1568 98 2 8 1140924416 1 1840 0 0 0 7 0 0 0 1840 0 8 4294902235 1180998 4 ##(Smalltalk.CommandDescription) 8 #borrarMateria 8 'Borrar' 1 1 0 0 16 0 0 0 1010 202 208 98 3 1074 1104 98 2 1138 1 1 1138 519 91 1840 1074 8 #isEnabled: 98 1 32 1840 1074 8 #text: 98 1 8 'Borrar' 1840 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 3 1 0 0 45 0 0 0] 98 0 1296 0 29 1296 0 27 0 0 410 576 98 15 0 1488 98 2 8 1140850688 131073 2272 0 0 0 7 0 0 0 2272 642 234 240 688 16 234 256 688 0 1010 202 208 98 1 1074 1104 98 2 1138 1 1 1138 519 633 2272 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 3 1 0 0 60 1 0 0] 98 4 410 576 98 15 0 2272 98 2 8 1140850688 131073 2544 0 0 0 7 0 0 0 2544 642 234 240 688 32 234 256 98 2 410 8 ##(Smalltalk.StaticText) 98 16 0 2544 98 2 8 1140850945 65 2672 0 0 0 7 0 263174 ##(Smalltalk.Font) 0 16 459014 ##(Smalltalk.LOGFONT) 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 1138 193 193 0 2672 0 8 4294902015 852486 ##(Smalltalk.NullConverter) 0 0 0 1010 202 208 98 2 1074 1104 98 2 1138 269 41 1138 251 79 2672 1074 2176 98 1 8 'nombre' 2672 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 134 0 0 0 20 0 0 0 3 1 0 0 59 0 0 0] 98 0 1296 0 27 8 'labelNombreMateria' 590342 ##(Smalltalk.Rectangle) 1138 21 41 1138 1 41 1010 202 208 98 1 1074 1104 98 2 1138 1 1 1138 519 159 2544 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 3 1 0 0 79 0 0 0] 98 2 410 2688 98 16 0 2544 98 2 8 1140850944 65 3344 0 0 0 7 0 2754 0 16 2786 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 1138 193 193 0 3344 0 8 4294902015 2866 0 0 0 1010 202 208 98 2 1074 1104 98 2 1138 21 41 1138 249 79 3344 1074 2176 98 1 8 'Nombre de la materia:' 3344 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 10 0 0 0 20 0 0 0 134 0 0 0 59 0 0 0] 98 0 1296 0 27 2672 1296 0 27 410 576 98 15 0 2272 98 2 8 1140850688 131073 3712 0 0 0 7 0 0 0 3712 642 234 240 688 32 234 256 98 2 410 2688 98 16 0 3712 98 2 8 1140850945 65 3840 0 0 0 7 0 2754 0 16 2786 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 1138 193 193 0 3840 0 8 4294902015 2866 0 0 0 1010 202 208 98 2 1074 1104 98 2 1138 269 41 1138 251 119 3840 1074 2176 98 1 8 'dificultad' 3840 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 134 0 0 0 20 0 0 0 3 1 0 0 79 0 0 0] 98 0 1296 0 27 8 'labelDificultad' 3122 1138 21 41 1138 1 1 1010 202 208 98 1 1074 1104 98 2 1138 1 159 1138 519 159 3712 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 79 0 0 0 3 1 0 0 158 0 0 0] 98 2 410 2688 98 16 0 3712 98 2 8 1140850944 65 4432 0 0 0 7 0 2754 0 16 2786 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 1138 193 193 0 4432 0 8 4294902015 2866 0 0 0 1010 202 208 98 2 1074 1104 98 2 1138 21 41 1138 249 119 4432 1074 2176 98 1 8 'Dificultad:' 4432 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 10 0 0 0 20 0 0 0 134 0 0 0 79 0 0 0] 98 0 1296 0 27 3840 1296 0 27 410 576 98 15 0 2272 98 2 8 1140850688 131073 4800 0 0 0 7 0 0 0 4800 642 234 240 688 32 234 256 98 2 410 2688 98 16 0 4800 98 2 8 1140850945 65 4928 0 0 0 7 0 0 0 4928 0 8 4294902015 2866 0 0 0 1010 202 208 98 2 1074 1104 98 2 1138 269 41 1138 251 79 4928 1074 2176 98 1 8 'SioNo' 4928 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 134 0 0 0 20 0 0 0 3 1 0 0 59 0 0 0] 98 0 1296 0 27 8 'labelTieneFinal' 3122 1138 21 41 1138 1 41 1010 202 208 98 1 1074 1104 98 2 1138 1 317 1138 519 159 4800 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 158 0 0 0 3 1 0 0 237 0 0 0] 98 2 410 2688 98 16 0 4800 98 2 8 1140850944 65 5456 0 0 0 7 0 2754 0 16 2786 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 1138 193 193 0 5456 0 8 4294902015 2866 0 0 0 1010 202 208 98 2 1074 1104 98 2 1138 21 41 1138 249 79 5456 1074 2176 98 1 8 'Tiene Final?' 5456 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 10 0 0 0 20 0 0 0 134 0 0 0 59 0 0 0] 98 0 1296 0 27 4928 1296 0 27 410 576 98 15 0 2272 98 2 8 1140850688 131073 5824 0 0 0 7 0 0 0 5824 642 234 240 688 32 234 256 98 2 410 2688 98 16 0 5824 98 2 8 1140850945 65 5952 0 0 0 7 0 0 0 5952 0 8 4294902015 2866 0 0 0 1010 202 208 98 2 1074 1104 98 2 1138 269 41 1138 251 119 5952 1074 2176 98 1 8 'unDia' 5952 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 134 0 0 0 20 0 0 0 3 1 0 0 79 0 0 0] 98 0 1296 0 27 8 'labelDiaSemana' 3122 1138 21 41 1138 1 1 1010 202 208 98 1 1074 1104 98 2 1138 1 475 1138 519 159 5824 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 237 0 0 0 3 1 0 0 60 1 0 0] 98 2 410 2688 98 16 0 5824 98 2 8 1140850944 65 6480 0 0 0 7 0 2754 0 16 2786 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 1138 193 193 0 6480 0 8 4294902015 2866 0 0 0 1010 202 208 98 2 1074 1104 98 2 1138 21 41 1138 249 119 6480 1074 2176 98 1 8 'Día de la semana:' 6480 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 10 0 0 0 20 0 0 0 134 0 0 0 79 0 0 0] 98 0 1296 0 27 5952 1296 0 27 1296 0 27 234 256 688 0 1010 202 208 98 1 1074 1104 98 2 1138 321 1 1138 519 723 1488 1234 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 160 0 0 0 0 0 0 0 163 1 0 0 105 1 0 0] 98 2 2272 1568 1296 0 27 234 256 688 0 0 0 0 0 14353 0 0 0 0 1 0 0 1010 202 208 98 2 1074 1104 98 2 1138 2719 21 1138 871 801 416 1074 8 #updateMenuBar 688 416 1234 8 #[44 0 0 0 0 0 0 0 0 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 79 5 0 0 10 0 0 0 2 7 0 0 154 1 0 0] 98 2 560 1488 1296 0 27 )! !
!ShellPoblacionActualPresenter class categoriesFor: #resource_Default_view!public!resources-views! !

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

