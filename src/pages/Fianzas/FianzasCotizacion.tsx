
import { useEffect, useRef, useState } from "react";
import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";
import './css/FianzasCotizacion.css';
import { RangeSlider } from "../../components/Fianzas/Landing/RangeSlider";
import { formatLocalCurrency } from "../../utils/CurrencyFormatter";
import { EmailInputForm } from "../../components/Fianzas/Landing/EmailSendingForm";
import api from "../../api/api";
// import GoogleTag from "../../components/GoogleAnalytics";


export const FianzasCotizacion = () => {
    

    const [viciosOcultos,setViciosOcultos] = useState<boolean>(false);
    const [amount, setAmount] = useState('');
    const [showEmailSendingForm, setShowEmailSendingForm] = useState<boolean>(false);

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

    const [montoAnticipo, setMontoAnticipo] =  useState<number>(0);
    const [primaNetaAnticipo, setPrimaNetaAnticipo]  = useState<number>(0);
    const [derechoAnticipo, setDerechoAnticipo] = useState<number>(0);
    const [gastoExpAnticipo, setGastosExpAnticipo] = useState<number>(2500);
    const [anticipoSubt, setAnticipoSubt] = useState<number>(0);
    const [anticipoIva, setAnticipoIva] = useState<number>(0);
    const [anticipoTotal, setAnticipoTotal] = useState<number>(0);

    /**VICIOS OCULTOS = true */
    const [montoCump, setMontoCump] = useState<number>(0);
    const [primaNetaCump, setPrimaNetaCump] = useState<number>(0);
    const [derechosCump, setDerechosCump] = useState<number>(0);
    const [gastosExpCump, setGastosExpCump] = useState<number>(2500);
    const [cumpSubtotal, setCumpSubtotal] = useState<number>(0);
    const [cumpIva, setCumpIva] = useState<number>(0);
    const [cumpTotal, setCumpTotal] = useState<number>(0);
    
    const [totalFianza, setTotalFianza] = useState<number>(0);

    const [montoLiciation, setMontoLicitacion ] = useState<number>(0)
    const [primaNetaLic, setPrimaNetLic ] = useState<number>(0)
    const [derechosLic, setDerechosLic ] = useState<number>(0)
    const [gastosExpLic, setGastosExpLic ] = useState<number>(2500)
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

        let primaNetaTmp = MontoAnticipo * 0.012;
        const PrimaNetaFinal = primaNetaTmp < 2500 && primaNetaTmp ? 2500 : primaNetaTmp

        setPrimaNetaAnticipo( PrimaNetaFinal );

        const DerechosAnticipo = PrimaNetaFinal *0.035;
        setDerechoAnticipo( DerechosAnticipo );
        
        let gastosExpAnticipoTmp = primaNetaTmp > 0 ? 2500 : 0
        setGastosExpAnticipo(gastosExpAnticipoTmp);
        const AnticipoSubtotal = PrimaNetaFinal + DerechosAnticipo + gastosExpAnticipoTmp;

        setAnticipoSubt(AnticipoSubtotal);
        
        setAnticipoIva( AnticipoSubtotal * 0.16);
        setAnticipoTotal( AnticipoSubtotal * 1.16);

        let MontoCumplimiento = MontoContrato * (accomplish /100)
        // MontoCumplimiento = MontoCumplimiento < 1700 ? 1700 : MontoCumplimiento;
        setMontoCump(MontoCumplimiento);

        let MontoMinimo = 0;
        if( viciosOcultos ){
            let montoMinimoTmp = MontoCumplimiento * 0.012;
            MontoMinimo = montoMinimoTmp < 1800 && montoMinimoTmp ? 1800 : montoMinimoTmp;
        }
        primaNetaTmp = viciosOcultos ? ( (MontoMinimo/12)*(term +12) ) : MontoCumplimiento * 0.012 

        let PrimaNetaCumplimento = primaNetaTmp < 2500 && primaNetaTmp ? 2500 : primaNetaTmp;

        setPrimaNetaCump(PrimaNetaCumplimento);

        const DerechosCumplimiento = PrimaNetaCumplimento * 0.035;
        setDerechosCump(DerechosCumplimiento);

        let gastosExpCumpTmp = PrimaNetaCumplimento > 0 ? 2500 : 0;
        setGastosExpCump(gastosExpCumpTmp)

        const CumplimientoSubtotal = PrimaNetaCumplimento + DerechosCumplimiento + gastosExpCumpTmp;
        setCumpSubtotal(CumplimientoSubtotal);
        setCumpIva( CumplimientoSubtotal *0.16);
        setCumpTotal( CumplimientoSubtotal *1.16);
        setTotalFianza( CumplimientoSubtotal *1.16 + AnticipoSubtotal * 1.16  );


        const MontoLicitacion = MontoContrato * bid / 100;
        setMontoLicitacion(MontoLicitacion);

        let PrimaNetaLicitacion =  MontoLicitacion * 0.03;
        PrimaNetaLicitacion = PrimaNetaLicitacion < 2500 && PrimaNetaLicitacion ? 2500 : PrimaNetaLicitacion;
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

    function onShowHideEmailSendingForm() {
        setShowEmailSendingForm(!showEmailSendingForm);
    }

    async function onSendEmail(inputEmailParam:string, onSetSpinnerHandler: any, onSentEmailHanlder: any){
        const fromEmail = 'fianzas@impulsaasesores.mx';
        const toEmail = inputEmailParam;
        
        let AC: string = 'd-284e44ee113040b3ae1a194643aa7d94' // default template Anticipo
        let templateBody:any
        if ( tipoFianza === 'anticipo'){
           /* templateBody = {
                Monto_Contrato: `${formatLocalCurrency(parseFloat(amount))}`,
                Ant_Monto: `${formatLocalCurrency(parseFloat(amount)*(upfront/100))}`,
                Cum_Monto: `${formatLocalCurrency(parseFloat(amount)*(accomplish/100))}`,
                Ant_Prima: `${formatLocalCurrency(primaNetaAnticipo)}`,
                Cum_Prima: `${formatLocalCurrency(primaNetaCump)}`,
                Ant_Derechos: `${formatLocalCurrency(derechoAnticipo)}`,
                Cum_Derechos: `${formatLocalCurrency(derechosCump)}`,
                Ant_Gastos: `${formatLocalCurrency(gastoExpAnticipo)}`,
                Cum_Gastos: `${formatLocalCurrency(gastosExpCump)}`,
                Ant_SubTotal: `${formatLocalCurrency(anticipoSubt)}`,
                Cum_SubTotal: `${formatLocalCurrency(cumpSubtotal)}`,
                Ant_IVA: `${formatLocalCurrency(anticipoIva)}`,
                Cum_IVA: `${formatLocalCurrency(cumpIva)}`,
                Ant_Total: `${formatLocalCurrency(anticipoTotal)}`,
                Cum_Total: `${formatLocalCurrency(cumpTotal)}`,
                Costo_Total: `${formatLocalCurrency(totalFianza)}` }*/
                
                const Monto = `${formatLocalCurrency(parseFloat(amount))}`;
                const MontoAnt = `${formatLocalCurrency(parseFloat(amount)*(upfront/100))}`;
                const MontoCum = `${formatLocalCurrency(parseFloat(amount)*(accomplish/100))}`;
                const PrimaAnt = `${formatLocalCurrency(primaNetaAnticipo)}`;
                const PrimaCum = `${formatLocalCurrency(primaNetaCump)}`;
                const DerechosAnt = `${formatLocalCurrency(derechoAnticipo)}`;
                const DerechoCum = `${formatLocalCurrency(derechosCump)}`;
                const GastosAnt = `${formatLocalCurrency(gastoExpAnticipo)}`;
                const GastosCum = `${formatLocalCurrency(gastosExpCump)}`;
                const SubtotalAnt = `${formatLocalCurrency(anticipoSubt)}`;
                const SubtotalCum = `${formatLocalCurrency(cumpSubtotal)}`;
                const IVAAnt = `${formatLocalCurrency(anticipoIva)}`;
                const IVACum = `${formatLocalCurrency(cumpIva)}`;
                const TotalAnt = `${formatLocalCurrency(anticipoTotal)}`;
                const TotalCum = `${formatLocalCurrency(cumpTotal)}`;
                const CostoTotal = `${formatLocalCurrency(totalFianza)}`;



                try {
                    onSetSpinnerHandler( true);
                    try {
                        onSetSpinnerHandler( true);
                        const apiRes = await api.post(`cotizaciones.php?fromEmail=${fromEmail}&toEmail=${toEmail}&AC=${AC}&ID=AN&Monto=${Monto}&MontoAnt=${MontoAnt}&MontoCum=${MontoCum}&PrimaAnt=${PrimaAnt}&PrimaCum=${PrimaCum}&DerechosAnt=${DerechosAnt}&DerechoCum=${DerechoCum}&GastosAnt=${GastosAnt}&GastosCum=${GastosCum}&SubtotalAnt=${SubtotalAnt}&SubtotalCum=${SubtotalCum}&IVAAnt=${IVAAnt}&IVACum=${IVACum}&TotalAnt=${TotalAnt}&TotalCum=${TotalCum}&CostoTotal=${CostoTotal}`);                    
                        onSetSpinnerHandler( false);
                        onSentEmailHanlder(true);
                        
                    }
                    catch(e){
            
                        onSetSpinnerHandler( false);
                        alert('Se produjo un error al intentar enviar el correo...')
                    }
                    
                    onSetSpinnerHandler( false);
                    onSentEmailHanlder(true);
                    
                }
                catch(e){
        
                    onSetSpinnerHandler( false);
                    alert('Se produjo un error al intentar enviar el correo...')
                }

        }
        

        if( tipoFianza === 'licitacion'){
            AC = 'd-5ba91a39a85b438ca7ebb09a5f233e96'; // template para Licitacion
           /* templateBody = {
                Monto_Contrato: `${formatLocalCurrency(parseFloat(amount))}`,
                Monto_Licitacion: `${formatLocalCurrency(montoLiciation)}`,
                Prima_Licitacion: `${formatLocalCurrency(primaNetaLic)}`,
                Derechos_Licitacion: `${formatLocalCurrency(derechosLic)}`,
                GastosExp_Licitacion: `${formatLocalCurrency(gastosExpLic)}`,
                Subtotal_Licitacion: `${formatLocalCurrency(licSubtotal)}`,
                IVA_Licitacion: `${formatLocalCurrency(licIva)}`,
                Total_Licitacion: `${formatLocalCurrency(licTotal)}`
            }*/
            const Monto = `${formatLocalCurrency(parseFloat(amount))}`;
            const MontoLi = `${formatLocalCurrency(montoLiciation)}`;
            const PrimaLi = `${formatLocalCurrency(primaNetaLic)}`;
            const DerechoLi = `${formatLocalCurrency(derechosLic)}`;
            const GastosLi = `${formatLocalCurrency(gastosExpLic)}`;
            const SubtotalLi = `${formatLocalCurrency(licSubtotal)}`;
            const IVALi = `${formatLocalCurrency(licIva)}`;
            const TotalLi = `${formatLocalCurrency(licTotal)}`;

            try {
                onSetSpinnerHandler( true);
                try {
                    onSetSpinnerHandler( true);
                    const apiRes = await api.post(`cotizaciones.php?fromEmail=${fromEmail}&toEmail=${toEmail}&AC=${AC}&ID=LI&Monto=${Monto}&MontoLi=${MontoLi}&PrimaLi=${PrimaLi}&DerechoLi=${DerechoLi}&GastosLi=${GastosLi}&SubtotalLi=${SubtotalLi}&IVALi=${IVALi}&TotalLi=${TotalLi}`);                    
                    onSetSpinnerHandler( false);
                    onSentEmailHanlder(true);
                    
                }
                catch(e){
        
                    onSetSpinnerHandler( false);
                    alert('Se produjo un error al intentar enviar el correo...')
                }
                
                onSetSpinnerHandler( false);
                onSentEmailHanlder(true);
                
            }
            catch(e){
    
                onSetSpinnerHandler( false);
                alert('Se produjo un error al intentar enviar el correo...')
            }
            
            
        }


        

    }
    function onCancel (){
        setShowEmailSendingForm(false);
    }


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

                    { amount && tipoFianza === 'anticipo' && 
                    <div className="table-container">

                    <table className="table-desktop">
                        <tr>
                            <th className="th-left">Concepto</th>
                            <th className="th-mid">Anticipo</th>
                            <th className="th-right">{ !viciosOcultos ? 'Cumplimiento' : 'Cumplimiento y VO'}</th>
                        </tr>
                        <tr>
                            <td data-cell="full"><b>Monto Fianza</b></td>
                            <td data-cell="limited">{formatLocalCurrency(parseFloat(amount)*(upfront/100))}</td>
                            <td data-cell="civil">{formatLocalCurrency(parseFloat(amount)*(accomplish/100))}</td>
                        </tr>
                        <tr>
                            <td data-cell="full">Prima Neta</td>
                            <td data-cell="limited">{formatLocalCurrency(primaNetaAnticipo)}</td>
                            <td data-cell="civil">{formatLocalCurrency(primaNetaCump)}</td>                            
                        </tr>
                        <tr>
                            <td data-cell="full">Derechos</td>
                            <td data-cell="limited">{formatLocalCurrency(derechoAnticipo)}</td>
                            <td data-cell="civil">{formatLocalCurrency(derechosCump)}</td>
                        </tr>
                        <tr>
                            <td data-cell="full">Gastos Exp</td>
                            <td data-cell="limited">{formatLocalCurrency(gastoExpAnticipo)}</td>
                            <td data-cell="civil">{formatLocalCurrency(gastosExpCump)}</td>
                        </tr>
                        <tr>
                            <td data-cell="full">Subtotal</td>
                            <td data-cell="limited">{formatLocalCurrency(anticipoSubt)}</td>
                            <td data-cell="civil">{formatLocalCurrency(cumpSubtotal)}</td>
                        </tr>
                        <tr>
                            <td data-cell="full" className="td-left">IVA</td>
                            <td data-cell="limited">{formatLocalCurrency(anticipoIva)}</td>
                            <td data-cell="civil" className="td-right">{formatLocalCurrency(cumpIva)}</td>
                        </tr>
                        <tr>
                            <td data-cell="full" className="td-left"><b>Total</b></td>
                            <td data-cell="limited"><b>{formatLocalCurrency(anticipoTotal)}</b></td>
                            <td data-cell="civil" className="td-right"><b>{formatLocalCurrency(cumpTotal)}</b></td>
                        </tr>
                        <tr>
                            <td data-cell="full" className="td-left" colSpan={2}><b>Costo Total de Fianzas</b></td>
                            {/* <td data-cell="limited"></td> */}
                            <td data-cell="civil" className="td-right"><b>{formatLocalCurrency(totalFianza)}</b></td>
                        </tr>

                    </table>

                    <table className="table-mobile">
                        <tr>
                            <th className="th-left">Concepto</th>
                            <th className="th-mid">Anticipo</th>
                        </tr>
                        <tr>
                            <td data-cell="full"><b>Monto Fianza</b></td>
                            <td data-cell="limited">{formatLocalCurrency(parseFloat(amount)*(upfront/100))}</td>
                        </tr>
                        <tr>
                            <td data-cell="full">Prima Neta</td>
                            <td data-cell="limited">{formatLocalCurrency(primaNetaAnticipo)}</td>
                        </tr>
                        <tr>
                            <td data-cell="full">Derechos</td>
                            <td data-cell="limited">{formatLocalCurrency(derechoAnticipo)}</td>
                        </tr>
                        <tr>
                            <td data-cell="full">Gastos Exp</td>
                            <td data-cell="limited">{formatLocalCurrency(gastoExpAnticipo)}</td>
                        </tr>
                        <tr>
                            <td data-cell="full">Subtotal</td>
                            <td data-cell="limited">{formatLocalCurrency(anticipoSubt)}</td>
                        </tr>
                        <tr>
                            <td data-cell="full" className="td-left">IVA</td>
                            <td data-cell="limited">{formatLocalCurrency(anticipoIva)}</td>
                        </tr>
                        <tr>
                            <td data-cell="full" className="td-left"><b>Total</b></td>
                            <td data-cell="limited"><b>{formatLocalCurrency(anticipoTotal)}</b></td>
                        </tr>

                    </table>

                    <table className="table-mobile">
                        <tr>
                            <th className="th-left">Concepto</th>
                            <th className="th-right">{ !viciosOcultos ? 'Cumplimiento' : 'Cumplimiento y VO'}</th>
                        </tr>
                        <tr>
                            <td data-cell="full"><b>Monto Fianza</b></td>
                            <td data-cell="civil">{formatLocalCurrency(parseFloat(amount)*(accomplish/100))}</td>
                        </tr>
                        <tr>
                            <td data-cell="full">Prima Neta</td>
                            <td data-cell="civil">{formatLocalCurrency(primaNetaCump)}</td>                            
                        </tr>
                        <tr>
                            <td data-cell="full">Derechos</td>
                            <td data-cell="civil">{formatLocalCurrency(derechosCump)}</td>
                        </tr>
                        <tr>
                            <td data-cell="full">Gastos Exp</td>
                            <td data-cell="civil">{formatLocalCurrency(gastosExpCump)}</td>
                        </tr>
                        <tr>
                            <td data-cell="full">Subtotal</td>
                            <td data-cell="civil">{formatLocalCurrency(cumpSubtotal)}</td>
                        </tr>
                        <tr>
                            <td data-cell="full" className="td-left">IVA</td>
                            <td data-cell="civil" className="td-right">{formatLocalCurrency(cumpIva)}</td>
                        </tr>
                        <tr>
                            <td data-cell="full" className="td-left"><b>Total</b></td>
                            <td data-cell="civil" className="td-right"><b>{formatLocalCurrency(cumpTotal)}</b></td>
                        </tr>
                        <tr>
                            <td data-cell="full" className="td-left"><b>Costo Total de Fianzas</b></td>
                            <td data-cell="civil" className="td-right"><b>{formatLocalCurrency(totalFianza)}</b></td>
                        </tr>

                    </table>

                    </div>}
                    { amount && tipoFianza === 'licitacion' &&
                    <div className="table-container">
                    <table>
                        <tr>
                            <th className="th-left">Concepto</th>
                            <th className="th-right">Licitación</th>
                        </tr>
                        <tr>
                            <td data-cell="full"><b>Monto Licitación</b></td>
                            <td data-cell="limited">{formatLocalCurrency(montoLiciation)}</td>
                        </tr>
                        <tr>
                            <td data-cell="full">Prima Neta</td>
                            <td data-cell="limited">{formatLocalCurrency(primaNetaLic)}</td>
                        </tr>
                        <tr>
                            <td data-cell="full">Derechos</td>
                            <td data-cell="limited">{formatLocalCurrency(derechosLic)}</td>
                        </tr>
                        <tr>
                            <td data-cell="full">Gastos Exp</td>
                            <td data-cell="limited">{formatLocalCurrency(gastosExpLic)}</td>
                        </tr>
                        <tr>
                            <td data-cell="full">Subtotal</td>
                            <td data-cell="limited">{formatLocalCurrency(licSubtotal)}</td>
                        </tr>
                        <tr>
                            <td data-cell="full" className="td-left">IVA</td>
                            <td data-cell="limited">{formatLocalCurrency(licIva)}</td>
                        </tr>
                        <tr>
                            <td data-cell="full" className="td-left"><b>Total</b></td>
                            <td data-cell="limited" className="td-right"><b>{formatLocalCurrency(licTotal)}</b></td>
                        </tr>
                    </table>
                    </div>}

                    
                <div className="email-form-container">
                    <button className="btn-fianzas" onClickCapture={onShowHideEmailSendingForm}>Enviar por correo </button>
                    { showEmailSendingForm && <EmailInputForm sendEmailHandler={onSendEmail} cancelHandler={onCancel}/>}
                </div>
                </div>
            </section>
            
            <Footer />
        </>
    );
}