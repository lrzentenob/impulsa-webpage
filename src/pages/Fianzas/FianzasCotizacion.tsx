
import { useEffect, useRef, useState } from "react";
import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";
import './css/FianzasCotizacion.css';
import { RangeSlider } from "../../components/Fianzas/Landing/RangeSlider";
import { formatLocalCurrency } from "../../utils/CurrencyFormatter";


export const FianzasCotizacion = () => {
    

    const [viciosOcultos,setViciosOcultos] = useState<boolean>(false);
    const [amount, setAmount] = useState('');

    const valuesUpfront = [0,10,15,20,25,30,35,40,45,50,55,60]
    const [minUpfront] = useState(0);
    const [maxUpfront] = useState(valuesUpfront.length - 1);
    const [positionUpfront, setPositionUpfront] = useState(0);
    const [upfront, setUpfront] = useState(valuesUpfront[0]);

    const valuesAccomplish = [0,10,15,20,25,30,35,40,45,50,55,60]
    const [minAccomplish] = useState(0);
    const [maxAccomplish] = useState(valuesAccomplish.length - 1);
    const [positionAccomplish, setPositionAccomplish] = useState(0);
    const [accomplish, setAccomplish] = useState(valuesAccomplish[0]);

    const valuesBid = [0,10,15,20,25,30,35,40,45,50,55,60]
    const [minBid] = useState(0);
    const [maxBid] = useState(valuesBid.length - 1);
    const [positionBid, setPositionBid] = useState(0);
    const [bid, setBid] = useState(valuesBid[0]);

    const valuesTerm = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,40,50]
    const [minTerm] = useState(0);
    const [maxTerm] = useState(valuesTerm.length - 1);
    const [positionTerm, setPositionTerm] = useState(0);
    const [term, setTerm] = useState(valuesTerm[0]);

    const [tipoFianza, setTipoFianza] = useState<'anticipo'|'licitacion'>('anticipo');
    const inputAmountRef = useRef<any>();

    const [montoContrato, setMontoContrato] =  useState<number>(0);
    // const [porcentajeAnticipo, setPorcentajeAnticipo] =  useState<number>(0);
    // const [porcentajeCumplimiento, setPorcentajeCumplimiento] =  useState<number>(0);

    const [montoAnticipo, setMontoAnticipo] =  useState<number>(0);
    const [primaNetaAnticipo, setPrimaNetaAnticipo]  = useState<number>(0);
    const [derechoAnticipo, setDerechoAnticipo] = useState<number>(0);
    const [gastoExpAnticipo, setGastoExpAnticipo] = useState<number>(2300);
    const [anticipoSubt, setAnticipoSubt] = useState<number>(0);
    const [anticipoIva, setAnticipoIva] = useState<number>(0);
    const [anticipoTotal, setAnticipoTotal] = useState<number>(0);

    /**VICIOS OCULTOS = true */
    const [montoCump, setMontoCump] = useState<number>(0);
    const [primaNetaCump, setPrimaNetaCump] = useState<number>(0);
    const [derechosCump, setDerechosCump] = useState<number>(0);
    const [gastosExpCump, setGastosExpCump] = useState<number>(2300);
    const [cumpSubtotal, setCumpSubtotal] = useState<number>(0);
    const [cumpIva, setCumpIva] = useState<number>(0);
    const [cumpTotal, setCumpTotal] = useState<number>(0);
    
    const [totalFianza, setTotalFianza] = useState<number>(0);

/**
Monto Licitacion
Prima Neta Licitacion
Derechos Licitacion
Gastos Expedicion Anticipo
Licitacion SubTotal
Licitacion IVA
Licitacion Total
 */
    const [montoLiciation, setMontoLicitacion ] = useState<number>(0)
    const [primaNetaLic, setPrimaNetLic ] = useState<number>(0)
    const [derechosLic, setDerechosLic ] = useState<number>(0)
    const [gastosExpLic, setGastosExpLic ] = useState<number>(2300)
    const [licSubtotal, setLicSubtotal ] = useState<number>(0)
    const [licIva, setLicIva ] = useState<number>(0)
    const [licTotal, setLicTotal ] = useState<number>(0)
    


    function onUpdateUpfront(e:any) {
        setPositionUpfront(e.target.value);
        setUpfront(valuesUpfront[e.target.value]);
    }
    
    function onUpdateAccomplish(e:any) {
        setPositionAccomplish(e.target.value);
        setAccomplish(valuesAccomplish[e.target.value]);
    }

    function onUpdateTerm(e:any) {
        setPositionTerm(e.target.value);
        setTerm(valuesTerm[e.target.value]);
    }
    function onUpdateBid(e:any) {
        setPositionBid(e.target.value);
        setBid(valuesBid[e.target.value]);
    }

    function onAmtInputChange (e:any) {

        const entryAmount = e.target.value

        const amountRE = new RegExp(import.meta.env.VITE_MONEY_ENTRY_REGEX);
        const amountMatch = entryAmount.match(amountRE);
        
        if( amountMatch || !entryAmount ){
            setAmount(entryAmount);
        }
    }

    async function onViciosOcultosCheck (e:any) {
        setViciosOcultos(e.target.checked)
        setTerm(1);
        recalculateForm();
    }
    async function onTipoFianzaChange (e:any){
        setTipoFianza(e.target.value);
        resetForm();
    }

    async function resetForm(){
        setPositionUpfront(0);
        setUpfront(valuesUpfront[0]);

        setPositionTerm(0);
        setTerm(valuesTerm[0]);

        setPositionAccomplish(0);
        setAccomplish(valuesAccomplish[0]);

        setAmount('');
        inputAmountRef.current.focus();
    }


    function recalculateForm () {

        const MontoContrato = parseFloat(amount)
        
        setMontoContrato( MontoContrato );
        const MontoAnticipo = MontoContrato * upfront / 100
        setMontoAnticipo( MontoAnticipo );

        let primaNetaTmp = MontoAnticipo * 0.12;
        const PrimaNetaFinal = primaNetaTmp < 1700 ? 1700 : primaNetaTmp

        setPrimaNetaAnticipo( PrimaNetaFinal );

        const DerechosAnticipo = PrimaNetaFinal *0.035;
        setDerechoAnticipo( DerechosAnticipo );
        
        const AnticipoSubtotal = PrimaNetaFinal + DerechosAnticipo + gastoExpAnticipo;
        setAnticipoSubt(AnticipoSubtotal);
        
        setAnticipoIva( AnticipoSubtotal * 0.16);
        setAnticipoTotal( AnticipoSubtotal * 1.16);

        let MontoCumplimiento = MontoContrato * (accomplish /100)
        MontoCumplimiento = MontoCumplimiento < 1700 ? 1700 : MontoCumplimiento;
        setMontoCump(MontoCumplimiento);

        let PrimaNetaCumplimento = viciosOcultos ? (MontoCumplimiento / 12)*(term + 12) : MontoCumplimiento * 0.12;

        PrimaNetaCumplimento = PrimaNetaCumplimento < 1700 ? 1700 : PrimaNetaCumplimento;
        setPrimaNetaCump(PrimaNetaCumplimento);

        const DerechosCumplimiento = PrimaNetaCumplimento * 0.035;
        setDerechosCump(DerechosCumplimiento);

        const CumplimientoSubtotal = PrimaNetaCumplimento + DerechosCumplimiento + gastosExpCump;
        setCumpSubtotal(CumplimientoSubtotal);
        setCumpIva( CumplimientoSubtotal *0.16);
        setCumpTotal( CumplimientoSubtotal *1.16);
        setTotalFianza( CumplimientoSubtotal *1.16 + AnticipoSubtotal * 1.16  );


        const MontoLicitacion = MontoContrato * bid / 100;
        setMontoLicitacion(MontoLicitacion);

        let PrimaNetaLicitacion =  MontoLicitacion * 0.03;
        PrimaNetaLicitacion = PrimaNetaLicitacion < 1700 ? 1700 : PrimaNetaLicitacion;
        setPrimaNetLic(PrimaNetaLicitacion);

        const DerechosLicitacion = PrimaNetaLicitacion * 0.035;
        setDerechosLic(DerechosLicitacion);

        const LicitacionSubtotal = PrimaNetaLicitacion + DerechosLicitacion + gastosExpLic
        setLicSubtotal( LicitacionSubtotal);
        setLicIva( LicitacionSubtotal * 0.16);
        setLicTotal( LicitacionSubtotal * 1.16);   
    }

    useEffect( ()=>{
        recalculateForm();
    },[amount,upfront,accomplish, term, bid])


    return (
        <>
            <Header />
            <Submenu />
            <section>
                
                <div className="fianzas-quote">
                    
                   <div className="table-title">
                        <h1>Cotizador de Fianzas</h1>
                    </div>

                    <div className="container">

                        <div className="user-input">
                            <div className="label">
                                <p>Tipo fianza:</p>
                            </div>
                            <select value={tipoFianza} onChange={onTipoFianzaChange}>
                                    <option value='anticipo'>Anticipo /Cumplimiento</option>
                                    <option value='licitacion'>Licitacion/Concurso</option>
                            </select>

                        </div>

                        
                        <div className="user-input">
                            <div className="label">
                                <p>Monto del Contrato: { amount ?formatLocalCurrency(parseFloat(amount)) : '' } </p>
                            </div>
                            <input type="text" onChange={onAmtInputChange} value={amount} ref={inputAmountRef}></input>
                        </div>


                        { tipoFianza ==='anticipo' &&
                        <div>
                            <div className="range-selection">
                                <div className="label">
                                    <p>Anticipo <b>{upfront} %</b></p>
                                </div>
                                <RangeSlider min={minUpfront} max={maxUpfront} value={positionUpfront} onUpdateHandler={onUpdateUpfront} step={1} />                     
                            </div>

                            <div className="range-selection">
                                <div className="label">
                                    <p>Cumplimiento <b>{accomplish} %</b></p>
                                </div>
                                <RangeSlider min={minAccomplish} max={maxAccomplish} value={positionAccomplish} onUpdateHandler={onUpdateAccomplish} step={1} />                     
                            </div>

                            <div className="user-input">
                            
                                <div className="label">
                                    <label htmlFor="vicios-ocultos-checkbox"></label>
                                </div>
                                <label htmlFor="vicios-ocultos-checkbox">
                                <input type="checkbox" id='vicios-ocultos-checkbox' checked={viciosOcultos} onChange={onViciosOcultosCheck}></input>
                                &nbsp;&nbsp;Con vicios ocultos</label>


                            </div>

                            { viciosOcultos &&
                            <div className="range-selection">
                                    <div className="label">
                                    <p>Plazo de Ejecución de Obra en Meses <b>{term} Meses</b></p>
                                </div>
                                <RangeSlider min={minTerm} max={maxTerm} value={positionTerm} onUpdateHandler={onUpdateTerm} step={1} />                     
                            </div>}
                        </div>}


                        { tipoFianza ==='licitacion' &&
                        <div>
                            <div className="range-selection">
                                <div className="label">
                                    <p>Porcentaje Licitación <b>{bid} %</b></p>
                                </div>
                                <RangeSlider min={minBid} max={maxBid} value={positionBid} onUpdateHandler={onUpdateBid} step={1} />                     
                            </div>

                        </div>}

                    </div>
                    {amount && tipoFianza === 'anticipo' &&
                    <div className="scorecard">
                            <h2>Fianza Anticipo/Cumplimiento Total: {formatLocalCurrency(totalFianza)}</h2>
                            <hr></hr>
                        <div>
                            {/* <p>Monto Contrato: {formatLocalCurrency(montoContrato)}</p> */}
                            <p>Monto Anticipo: {formatLocalCurrency(montoAnticipo)}</p>
                            <p>Prima Neta Anticipo: {formatLocalCurrency(primaNetaAnticipo)}</p>
                            <p>Derechos Anticipo: {formatLocalCurrency(derechoAnticipo)}</p>
                            <p>Gastos Expedicion Anticipo: {formatLocalCurrency(gastoExpAnticipo)}</p>
                            <p>Anticipo Subtotal: {formatLocalCurrency(anticipoSubt)}</p>
                            <p>Anticipo IVA: {formatLocalCurrency(anticipoIva)}</p>
                            <h3>Anticipo Total: {formatLocalCurrency(anticipoTotal)}</h3>
                            <hr></hr>
                        </div>
                        <div>
                            {/* <p>Monto Cumplimiento: {formatLocalCurrency(montoCump)}</p> */}
                            <p>Prima Neta Cumplimiento: {formatLocalCurrency(primaNetaCump)}</p>
                            <p>Derechos Cumplimiento: {formatLocalCurrency(derechosCump)}</p>
                            <p>Gastos Exp Cumplimiento: {formatLocalCurrency(gastosExpCump)}</p>
                            <p>Cumplimiento Sub: {formatLocalCurrency(cumpSubtotal)}</p>
                            <p>Cumplimiento IVA: {formatLocalCurrency(cumpIva)}</p>
                            <h3>Cumplimiento Total: {formatLocalCurrency(cumpTotal)}</h3>
                            <hr></hr>                            
                        </div>
                    </div>}

                    {amount && tipoFianza === 'licitacion' &&
                    <div className="scorecard">
                            <h2>Fianza Licitacion Total: {formatLocalCurrency(licTotal)}</h2>
                            <hr></hr>
                        <div>
                            <p>Monto Licitacion: {formatLocalCurrency(montoLiciation)}</p>
                            <p>Prima Neta Licitación: {formatLocalCurrency(primaNetaLic)}</p>
                            <p>Derechos Licitación: {formatLocalCurrency(derechosLic)}</p>
                            <p>Gastos Expedicion Licitación: {formatLocalCurrency(gastosExpLic)}</p>
                            <p>Licitación Subtotal: {formatLocalCurrency(licSubtotal)}</p>
                            <p>Licitación IVA: {formatLocalCurrency(licIva)}</p>
                            <h3>Licitación Total: {formatLocalCurrency(licTotal)}</h3>
                            <hr></hr>
                        </div>

                    </div>}

                    { false &&
                    <table>
                        <tr>
                            <th className="th-left">Concepto</th>
                            <th className="th-mid">Anticipo</th>
                            <th className="th-right">Cumplimiento</th>
                        </tr>
                        <tr>
                            <td data-cell="full"><b>Monto Fianza</b>    </td>
                            <td data-cell="limited">{formatLocalCurrency(parseFloat(amount)*(upfront/100))}</td>
                            <td data-cell="civil">{formatLocalCurrency(parseFloat(amount)*(accomplish/100))}</td>
                        </tr>
                        <tr>
                            <td data-cell="full">Prima Neta</td>
                            <td data-cell="limited">{ }</td>
                            <td data-cell="civil">$3,400.00</td>                            
                        </tr>
                        <tr>
                            <td data-cell="full">Derechos</td>
                            <td data-cell="limited">$126.00</td>
                            <td data-cell="civil">$119.00</td>
                        </tr>
                        <tr>
                            <td data-cell="full">Gastos Exp</td>
                            <td data-cell="limited">$2,300.00</td>
                            <td data-cell="civil">$2,300.00</td>
                        </tr>
                        <tr>
                            <td data-cell="full">Subtotal</td>
                            <td data-cell="limited">$6,026.00</td>
                            <td data-cell="civil">$5,819.00</td>
                        </tr>
                        <tr>
                            <td data-cell="full" className="td-left">IVA</td>
                            <td data-cell="limited">$964.16</td>
                            <td data-cell="civil" className="td-right">$931.04</td>
                        </tr>
                        <tr>
                            <td data-cell="full" className="td-left"><b>Total</b></td>
                            <td data-cell="limited"><b>$6,990.16</b></td>
                            <td data-cell="civil" className="td-right"><b>$6,750.04</b></td>
                        </tr>

                    </table>}

                    {/* <h2>Cotiza tu fianza</h2>
                    <p>Cillum ullamco elit in aliquip nulla quis. Anim eiusmod anim esse sint Lorem id eiusmod proident eu voluptate id Lorem. Labore nisi voluptate in eu deserunt veniam minim elit sit exercitation exercitation eiusmod.</p>

                    <div className="container">

                    <form onSubmit={onSubmit}>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="contractAmt">Monto del Contrato *</label>
                            </div>
                            <div className="col-75">
                            <input type="text" id="contractAmt" name="contract-amount" placeholder="Ingrese una cantidad..." />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                            <label htmlFor="lname">Last Name</label>
                            </div>
                            <div className="col-75">
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                            <label htmlFor="country">Country</label>
                            </div>
                            <div className="col-75">
                            <select id="country" name="country">
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                            </select>
                            </div>
                        </div>
                        <div className="row">
                            <input type="submit" value="Submit"/>
                        </div>
                    </form>
                    </div>
               */}
                </div>
            </section>
            <Footer />
        </>
    );
}