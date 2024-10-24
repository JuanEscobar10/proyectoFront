// Presupuestos individuales por categoría
const presupuestoAlimentacion = 500000;
const presupuestoTransporte = 200000;
const presupuestoEntretenimiento = 500000;
const presupuestoOtros = 100000;

// Inicializar gastos individuales en cada categoría
let gastoAlimentacion = 0;
let gastoTransporte = 0;
let gastoEntretenimiento = 0;
let gastoOtros = 0;

// Función para agregar un gasto
function agregarGasto() {
    let categoria = prompt("Ingrese la categoría (alimentacion, transporte, entretenimiento, otros): ").toLowerCase();
    let monto = parseFloat(prompt("Ingrese el monto del gasto: "));

    // Validar categoría y monto
    if (monto > 0) {
        switch (categoria) {
            case 'alimentacion':
                gastoAlimentacion += monto;
                verificarPresupuesto(monto, presupuestoAlimentacion, 'alimentacion');
                break;
            case 'transporte':
                gastoTransporte += monto;
                verificarPresupuesto(monto, presupuestoTransporte, 'transporte');
                break;
            case 'entretenimiento':
                gastoEntretenimiento += monto;
                verificarPresupuesto(monto, presupuestoEntretenimiento, 'entretenimiento');
                break;
            case 'otros':
                gastoOtros += monto;
                verificarPresupuesto(monto, presupuestoOtros, 'otros');
                break;
            default:
                console.log("Categoría no válida.");
        }
    } else {
        console.log("Monto no válido.");
    }
}

// Función para verificar si el presupuesto ha sido excedido
function verificarPresupuesto(gasto, presupuesto, categoria) {
    if (gasto > presupuesto) {
        console.log(`Alerta: Has excedido el presupuesto de ${categoria}.`);
    }
}

// Función para mostrar el resumen de gastos
function mostrarResumen() {
    let totalGastos = gastoAlimentacion + gastoTransporte + gastoEntretenimiento + gastoOtros;
    
    console.log("Resumen de gastos:");
    console.log(`Alimentación: $${gastoAlimentacion}`);
    console.log(`Transporte: $${gastoTransporte}`);
    console.log(`Entretenimiento: $${gastoEntretenimiento}`);
    console.log(`Otros: $${gastoOtros}`);
    console.log(`Total de gastos: $${totalGastos}`);
}

// Función principal para iniciar el sistema
function iniciarSistema() {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n" +
            "1. Agregar gasto\n" +
            "2. Mostrar resumen de gastos\n" +
            "3. Salir\n" + 
            "Ingrese su opción: ");

        switch (opcion) {
            case '1':
                agregarGasto(); // Agregar gasto
                break;
            case '2':
                mostrarResumen(); // Mostrar resumen de gastos
                break;
            case '3':
                console.log("Saliendo del sistema...");
                break;
            default:
                console.log("Opción no válida. Intente de nuevo.");
        }
    } while (opcion !== '3'); // Continuar hasta que el usuario elija salir
}

// Iniciar el sistema de control de gastos
iniciarSistema();
