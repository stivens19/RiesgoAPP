import React, { useState } from 'react';

const RiesgoApp = () => {
    const [indices, setIndices] = useState({});
    const [diagnostico, setDiagnostico] = useState(null);
    const [loading, setloading] = useState(false)
    const selectInputChange = ({ target }) => {
        setIndices({
            ...indices,
            [target.name]: target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true)
        let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const { treporte, tipocausa, rcritico } = indices;
        arr[treporte * 1 - 1] = 1;
        arr[tipocausa * 1 - 1] = 1;
        arr[rcritico * 1 - 1] = 1;
        const res = await fetch('https://glacial-scrubland-92891.herokuapp.com/predecir', {
            method: "POST",
            body: JSON.stringify({
                arr: arr
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const result=await res.json();
        setloading(false)
        setDiagnostico(result.diagnostico)
        
    }
    return (
        <div className="container">
            <h1 className="text-center text-white border-bottom p-4 mb-5">RiesgoApp</h1>
            <div className="row">
                <div className="col-sm-12 col-md-5">
                    <img src="./riesgo-aceptable.svg" className="w-100" alt="alerta" />
                </div>

                <div className="col-sm-12 col-md-7">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="treporte" className="text-white">Tipo de reporte</label>
                        <select name="treporte" id="treporte" className="form-control" onChange={selectInputChange}>
                            <option value="">--Seleccione</option>
                            <option value="1">ACTO SUB ESTANDAR</option>
                            <option value="2">CONDICION SUB ESTANDAR</option>
                        </select>

                        <label htmlFor="tipocausa" className="text-white mt-4">Tipo de causa</label>

                        <select name="tipocausa" id="tipocausa" className="form-control" onChange={selectInputChange}>
                            <option value="">--Seleccione</option>
                            <option value="3">1 CAÍDA DE PERSONAS AL MISMO O DISTINTO NIVEL</option>
                            <option value="4">2 CAÍDA DE OBJETOS</option>
                            <option value="5">3 DESPRENDIMIENTO DE ROCA</option>
                            <option value="6">4 CARGUÍO Y DESCARGA DE MINERAL / DESMONTE</option>
                            <option value="7">5 MANIPULEO DE MATERIALES</option>
                            <option value="8">6 ATROPELLAMIENTO / CHOQUE POR EQUIPOS O VEHÍCULOS</option>

                            <option value="9">7 MAQUINARIAS EN MOVIMIENTO </option>

                            <option value="10">8 DESATORO</option>

                            <option value="11">9 SUCCIÓN DE MINERAL / DESMONTE</option>

                            <option value="12">10 SOPLADO DE MINERAL O DESMONTE</option>

                            <option value="13">11 PERFORACIÓN</option>

                            <option value="14">12 EXPLOSIVOS</option>

                            <option value="15">13 GOLPES POR HERRAMIENTAS</option>

                            <option value="16">14 TEMPERATURAS EXTREMAS</option>

                            <option value="17">15 ENERGÍA ELÉCTRICA</option>

                            <option value="18">16 RADIACIONES</option>

                            <option value="19">17 CAÍDA DE RAYO</option>

                            <option value="20">18 SUSTANCIAS PELIGROSAS</option>

                            <option value="21">19 VENTILACIÓN DEFICIENTE</option>

                            <option value="22">20 INTOXICACIÓN POR ALIMENTOS</option>

                            <option value="23">21 ESFUERZOS EXCESIVOS (FACTORES DISERGONÓMICOS)</option>

                            <option value="24">22 OTROS</option>

                            <option value="25">23 FALTA  / FALLA DE SOSTENIMIENTO</option>

                            <option value="26">24 FALTA DE SEÑALIZACIÓN</option>

                            <option value="27">25 NO USAR EPP CORRECTAMENTE</option>

                            <option value="28">26 VIAS EN MAL ESTADO</option>

                            <option value="29">27 SINTOMAS DE EBRIEDAD</option>

                            <option value="30">28 FALTA DE CAPACITACIÓN</option>

                            <option value="31">29 AGRESIONES Y ACTOS DE VIOLENCIA PERSONAS</option>

                            <option value="32">30 AHOGAMIENTO</option>

                            <option value="33">31 AISLAMIENTO / BLOQUEO DE ENERGIA</option>

                            <option value="34">32 APRISIONAMIENTO</option>

                            <option value="35">33 CONJUNTIVITIS</option>

                            <option value="36">34 DEFICIENTE ILUMINACIÓN</option>

                            <option value="37">35 ELECTROCUCIÓN</option>

                            <option value="38">36 ELEVACIÓN  / IZAJE DE CARGAS Y TRABAJOS CON GRÚAS</option>

                            <option value="39">37 EQUIPOS FUERA DEL LMP GASES</option>

                            <option value="40">38 ESPACIOS CONFINADOS</option>

                            <option value="41">39 EXPOSICIÓN A POLVOS</option>

                            <option value="42">40 EXPOSICIÓN A RUIDOS</option>

                            <option value="43">41 EXPOSICIÓN A VIBRACIONES</option>

                            <option value="44">42 FALTA / FALLA DE COMUNICACIÓN</option>

                            <option value="45">43 FALTA DE HERRAMIENTAS DE GESTIÓN</option>

                            <option value="46">44 FALTA DE LICENCIA INTERNA DE CONDUCIR (LIC)</option>

                            <option value="47">45 FALTA DE MURO / PARRILLA</option>

                            <option value="48">46 FALTA DE ORDEN Y LIMPIEZA</option>

                            <option value="49">47 FALTA DE PETAR</option>

                            <option value="50">48 FALTA DE SUCAMEC</option>

                            <option value="51">49 GASES PRESURIZADOS / TRABAJO EN CALIENTE</option>

                            <option value="52">50 INCENDIO</option>

                            <option value="53">51 INCUMPLIMIENTO REGLAS DE ORO</option>

                            <option value="54">52 INCUMPLIMIENTO REGLAS DE VIDA COVID-19</option>

                            <option value="55">53 INFRAESTRUCTURA Y OBRAS CIVILES</option>

                            <option value="56">54 INTOXICACIÓN POR GASES / DEFICIENCIA DE OXIGENO </option>

                            <option value="57">55 INUNDACIONES Y DESBORDES</option>

                            <option value="58">56 LABOR FUERA DE LOS LMP DE GASES</option>

                            <option value="59">57 LAMPARA MINERA EN MAL ESTADO</option>

                            <option value="60">58 MANEJO DE LLANTAS Y AROS</option>

                            <option value="61">59 NO DEVOLUCIÓN DE AUTORIZACIÓN INTERNA DE RCS Y/O LICENCIA INTERNA </option>

                            <option value="62">60 PÉRDIDA DE AUTORIZACIÓN INTERNA DE RCS Y/O LICENCIA INTERNA</option>

                            <option value="63">61 QUEMADURAS</option>

                            <option value="64">62 RESPUESTA A EMERGENCIAS</option>

                            <option value="65">63 SIN GUARDAS DE PROTECCIÓN DE MÁQUINAS</option>

                            <option value="66">64 VEHÍCULOS CON EXCESO DE PERSONAS</option>

                            <option value="67">65 VIAS DE ACCESO PEATONALES</option>
                        </select>


                        <label htmlFor="rcritico" className="text-white mt-4">Riesgo Crìtico de Seguridad</label>

                        <select name="rcritico" id="rcritico" className="form-control" onChange={selectInputChange}>
                            <option value="">--Seleccione</option>

                            <option value="68">GASES PRESURIZADOS</option>

                            <option value="69">CAÍDA DE ROCAS</option>

                            <option value="70">SUSTANCIAS QUÍMICAS Y EPIDEMIOLÓGICA PELIGROSA</option>

                            <option value="71">ESPACIO CONFINADO</option>

                            <option value="72">VEHÍCULOS MÓVILES</option>

                            <option value="73">BLOQUEO DE ENERGÍA</option>

                            <option value="74">HERRAMIENTAS MANUALES</option>

                            <option value="75">EXPLOSIVOS</option>

                            <option value="76">CARGAS SUSPENDIDAS</option>

                            <option value="77">ENERGÍA ELÉCTRICA</option>

                            <option value="78">TRABAJO EN ALTURA</option>

                            <option value="79">PROTECCIÓN DE MAQUINARIAS</option>

                        </select>
                        <button className="btn btn-primary mt-4 btn-block">Revisar Riesgo</button>
                    </form>
                    {
                        loading ? <h3 className="text-white">Cargando...</h3> : (diagnostico && <h3 className="text-white mt-4">{diagnostico}</h3>)
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default RiesgoApp;
