import type { MutableRefObject } from "react";
import './GreenDot.css'

type Props = {
    showDots: Record<string, boolean>
    dotRefs: MutableRefObject<Record<string, HTMLDivElement | null>>
}




const GreenDots = ({ showDots, dotRefs }: Props) => {
  const setDotRef = (slug: string) => (element: HTMLDivElement | null) => {
    dotRefs.current[slug] = element;
  };


  return (
    <>
      <div
        ref={setDotRef('1')}
        id='1'
        className='absolute aspect-square w-[3.2%] bottom-[13.9%] left-[39.2%] flex items-center justify-center'
      >
        <div className='relative flex h-full w-full items-center justify-center'>
          <div className='absolute bottom-[3%] left-1/2 h-[36%] w-[36%] -translate-x-1/2 rotate-45 rounded-[2px] bg-emerald-400 border-b border-r border-white/85 shadow-[0_4px_8px_rgba(15,23,42,0.22)]' />
          <div className='absolute inset-[8%] rounded-full bg-emerald-400 border border-white/90 shadow-[0_0_0_1px_rgba(6,78,59,0.15),0_0_12px_rgba(16,185,129,0.45)]' />
          <span className='relative z-10 text-[0.72em] font-black leading-none text-emerald-950'>1</span>
        </div>
      </div>
      {showDots['52'] && <div ref={setDotRef('52')} id={'52'} className='blink-on absolute aspect-square w-[1.8%] bottom-[4.4%] left-[9.5%] bg-[#01ff1f] rounded-full border  '></div>}
        {showDots['53'] && <div ref={setDotRef('53')} id={'53'} className='blink-on absolute aspect-square w-[1.8%] bottom-[10.5%] left-[6.4%] bg-[#01ff1f] rounded-full border  '></div>}
        {showDots['E'] && <div ref={setDotRef('E')} id={'E'} className='blink-on absolute aspect-square w-[1.8%] bottom-[9%] left-[21.2%] bg-[#01ff1f] rounded-full border  '></div>}
        {showDots['D'] && <div ref={setDotRef('D')} id={'D'}  className='absolute aspect-square w-[1.8%] bottom-[9%] left-[24%] bg-[#01ff1f] rounded-full border  '></div>}
        {showDots['C'] && <div ref={setDotRef('C')} id={'C'} className='blink-on absolute aspect-square w-[1.8%] bottom-[9%] left-[27%] bg-[#01ff1f] rounded-full border  '></div>}
        {showDots['B'] && <div ref={setDotRef('B')} id={'B'} className='blink-on absolute aspect-square w-[1.8%] bottom-[9%] left-[30.2%] bg-[#01ff1f] rounded-full border  '></div>}
        {showDots['A'] && <div ref={setDotRef('A')} id={'A'} className='blink-on absolute aspect-square w-[1.8%] bottom-[9%] left-[33.4%] bg-[#01ff1f] rounded-full border  '></div>}
        {showDots['18'] && <div ref={setDotRef('18')} id={'18'} className='blink-on  absolute aspect-square w-[1.8%] bottom-[3%] left-[39.6%] bg-[#01ff1f] rounded-full border  '></div>}
        {showDots['17'] && <div ref={setDotRef('17')} id={'17'} className='blink-on absolute aspect-square w-[1.8%] bottom-[9%] left-[74%] bg-[#01ff1f] rounded-full border  '></div>}
        {showDots['16'] && <div ref={setDotRef('16')} id={'16'} className='blink-on absolute aspect-square w-[1.8%] bottom-[30%] left-[72.5%] bg-[#01ff1f] rounded-full border  '></div>}
        {showDots['14'] && <div ref={setDotRef('14')} id={'14'} className='blink-on absolute aspect-square w-[1.8%] bottom-[17%] left-[53.5%] bg-[#01ff1f] rounded-full border  '></div>}
        {showDots['13'] && <div ref={setDotRef('13')} id={'13'} className='blink-on absolute aspect-square w-[1.8%] bottom-[30.2%] left-[53.5%] bg-[#01ff1f] rounded-full border  '></div>}
        {showDots['12'] && <div ref={setDotRef('12')} id={'12'} className='blink-on absolute aspect-square w-[1.8%] bottom-[28.2%] left-[46%] bg-[#01ff1f] rounded-full border  '></div>}
        {showDots['15'] && <div ref={setDotRef('15')} id={'15'} className='blink-on absolute aspect-square w-[1.8%] bottom-[36.2%] left-[59%] bg-[#01ff1f] rounded-full border  '></div>}
        {showDots['Q'] && <div ref={setDotRef('Q')} id={'Q'} className='blink-on absolute aspect-square w-[1.8%] bottom-[46.2%] left-[59.3%] bg-[#01ff1f] rounded-full border  '></div>}
         {showDots['47'] && <div ref={setDotRef('47')} id={'47'} className='blink-on absolute aspect-square w-[1.5%] bottom-[63.2%] left-[61.3%] bg-[#01ff1f] rounded-full border  '></div>}
        {showDots['P'] && <div ref={setDotRef('P')} id={'P'} className='blink-on  absolute aspect-square w-[1.8%] bottom-[46.2%] left-[56.4%] bg-[#01ff1f] rounded-full border  '></div>}
        {showDots['O'] && <div ref={setDotRef('O')} id={'O'} className='blink-on absolute aspect-square w-[1.8%] bottom-[46.2%] left-[53.7%] bg-[#01ff1f] rounded-full border  '></div>}
        {showDots['N'] && <div ref={setDotRef('N')} id={'N'} className='blink-on absolute aspect-square w-[1.8%] bottom-[46.2%] left-[51%] bg-[#01ff1f] rounded-full border  '></div>}
        {showDots['M'] && <div ref={setDotRef('M')} id={'M'} className='blink-on absolute aspect-square w-[1.8%] bottom-[50.2%] left-[48%] bg-[#01ff1f] rounded-full border  '></div>}
        {showDots['11'] && <div ref={setDotRef('11')} id={'11'} className='blink-on absolute aspect-square w-[1.8%] bottom-[39.2%] left-[44.6%] bg-[#01ff1f] rounded-full border  '></div>}
        {showDots['8'] && <div ref={setDotRef('8')} id={'8'} className='blink-on absolute aspect-square w-[1.5%] bottom-[39.2%] left-[41.4%] bg-[#01ff1f] rounded-full border  '></div>}
        {showDots['7'] && <div ref={setDotRef('7')} id={'7'} className='blink-on absolute aspect-square w-[1.5%] bottom-[39.2%] left-[38.7%] bg-[#01ff1f] rounded-full border  '></div>}
{showDots['6'] && <div ref={setDotRef('6')} id={'6'} className='blink-on absolute aspect-square w-[1.5%] bottom-[39.2%] left-[36.1%] bg-[#01ff1f] rounded-full border  '></div>}
{showDots['5'] && <div ref={setDotRef('5')} id={'5'} className='blink-on absolute aspect-square w-[1.5%] bottom-[21.9%] left-[35.1%] bg-[#01ff1f] rounded-full border  '></div>}
{showDots['2'] && <div ref={setDotRef('2')} id={'2'} className='blink-on absolute aspect-square w-[1.5%] bottom-[19%] left-[36.1%] bg-[#01ff1f] rounded-full border  '></div>}
{showDots['19'] && <div ref={setDotRef('19')} id={'19'} className='blink-on absolute aspect-square w-[1.2%] bottom-[16%] left-[33.1%] bg-[#01ff1f] rounded-full border  '></div>}
{showDots['21'] && <div ref={setDotRef('21')} id={'21'} className='blink-on absolute aspect-square w-[1.2%] bottom-[15.6%] left-[28.1%] bg-[#01ff1f] rounded-full border  '></div>}
{showDots['22'] && <div ref={setDotRef('22')} id={'22'} className='blink-on absolute aspect-square w-[1.2%] bottom-[13%] left-[25.4%] bg-[#01ff1f] rounded-full border  '></div>}
{showDots['23'] && <div ref={setDotRef('23')} id={'23'} className='blink-on absolute aspect-square w-[1.2%] bottom-[14.7%] left-[22.4%] bg-[#01ff1f] rounded-full border  '></div>}
{showDots['24'] && <div ref={setDotRef('24')} id={'24'} className='blink-on absolute aspect-square w-[1.2%] bottom-[12%] left-[20%] bg-[#01ff1f] rounded-full border  '></div>}
{showDots['26'] && <div ref={setDotRef('26')} id={'26'} className='blink-on absolute aspect-square w-[1.2%] bottom-[20.5%] left-[21%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['25'] && <div ref={setDotRef('25')} id={'25'} className='blink-on absolute aspect-square w-[1.2%] bottom-[22.6%] left-[27.5%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['20'] && <div ref={setDotRef('20')} id={'20'} className='blink-on absolute aspect-square w-[1.2%] bottom-[19.3%] left-[30%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['F'] && <div ref={setDotRef('F')} id={'F'} className='blink-on absolute aspect-square w-[1.2%] bottom-[25.5%] left-[31%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['G'] && <div ref={setDotRef('G')} id={'G'} className='blink-on absolute aspect-square w-[1.2%] bottom-[25.5%] left-[29.5%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['H'] && <div ref={setDotRef('H')} id={'H'} className='blink-on absolute aspect-square w-[1.2%] bottom-[25.5%] left-[28%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['I'] && <div ref={setDotRef('I')} id={'I'} className='blink-on absolute aspect-square w-[1.2%] bottom-[25.5%] left-[26.5%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['J'] && <div ref={setDotRef('J')} id={'J'} className='blink-on absolute aspect-square w-[1.2%] bottom-[25.5%] left-[25.1%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['K'] && <div ref={setDotRef('K')} id={'K'} className='blink-on absolute aspect-square w-[1.5%] bottom-[25.5%] left-[22.7%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['L'] && <div ref={setDotRef('L')} id={'L'} className='blink-on absolute aspect-square w-[1.5%] bottom-[25.5%] left-[20.3%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['27'] && <div ref={setDotRef('27')} id={'27'} className='blink-on absolute aspect-square w-[1.5%] bottom-[35.5%] left-[31.2%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['28'] && <div ref={setDotRef('28')} id={'28'} className='blink-on absolute aspect-square w-[1.2%] bottom-[39%] left-[29%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['29'] && <div ref={setDotRef('29')} id={'29'} className='blink-on absolute aspect-square w-[1.2%] bottom-[39.6%] left-[25%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['30'] && <div ref={setDotRef('30')} id={'30'} className='blink-on absolute aspect-square w-[1.2%] bottom-[42.9%] left-[30.4%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['31'] && <div ref={setDotRef('31')} id={'31'} className='blink-on absolute aspect-square w-[1.2%] bottom-[42%] left-[24.9%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['32'] && <div ref={setDotRef('32')} id={'32'} className='blink-on absolute aspect-square w-[1.2%] bottom-[43.2%] left-[20.3%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['33'] && <div ref={setDotRef('33')} id={'33'} className='blink-on absolute aspect-square w-[1%] bottom-[46.1%] left-[31.9%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['34'] && <div ref={setDotRef('34')} id={'34'} className='blink-on absolute aspect-square w-[1%] bottom-[46.2%] left-[28.2%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['35'] && <div ref={setDotRef('35')} id={'35'} className='blink-on absolute aspect-square w-[1%] bottom-[49.2%] left-[28.2%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['36'] && <div ref={setDotRef('36')} id={'36'} className='blink-on absolute aspect-square w-[1%] bottom-[45.2%] left-[40.5%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['37'] && <div ref={setDotRef('37')} id={'37'} className='blink-on absolute aspect-square w-[1%] bottom-[52.9%] left-[41.5%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['38'] && <div ref={setDotRef('38')} id={'38'} className='blink-on absolute aspect-square w-[1%] bottom-[52.9%] left-[36.8%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['39'] && <div ref={setDotRef('39')} id={'39'} className='blink-on absolute aspect-square w-[1%] bottom-[52.9%] left-[32.8%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['40'] && <div ref={setDotRef('40')} id={'40'} className='blink-on absolute aspect-square w-[1%] bottom-[57.2%] left-[41.5%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['41'] && <div ref={setDotRef('41')} id={'41'} className='blink-on absolute aspect-square w-[1%] bottom-[57.2%] left-[37%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['42'] && <div ref={setDotRef('42')} id={'42'} className='blink-on absolute aspect-square w-[1%] bottom-[56.8%] left-[33%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['46'] && <div ref={setDotRef('46')} id={'46'} className='blink-on absolute aspect-square w-[1%] bottom-[54.8%] left-[29%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['45'] && <div ref={setDotRef('45')} id={'45'} className='blink-on absolute aspect-square w-[1%] bottom-[60.5%] left-[33%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['44'] && <div ref={setDotRef('44')} id={'44'} className='blink-on absolute aspect-square w-[1%] bottom-[60.5%] left-[37.2%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['43'] && <div ref={setDotRef('43')} id={'43'} className='blink-on absolute aspect-square w-[1%] bottom-[60.5%] left-[42.2%] bg-[#01ff1f] rounded-full border' ></div>}

{showDots['51'] && <div ref={setDotRef('51')} id={'51'} className='blink-on absolute aspect-square w-[1.8%] bottom-[68%] left-[36%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['49'] && <div ref={setDotRef('49')} id={'49'} className='blink-on absolute aspect-square w-[1.2%] bottom-[70%] left-[27%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['50'] && <div ref={setDotRef('50')} id={'50'} className='blink-on absolute aspect-square w-[1.8%] bottom-[65%] left-[21%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['51'] && <div ref={setDotRef('51')} id={'51'} className='blink-on absolute aspect-square w-[1.8%] bottom-[68%] left-[36%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['V'] && <div ref={setDotRef('V')} id={'V'} className='blink-on absolute aspect-square w-[1.8%] bottom-[68%] left-[59.8%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['U'] && <div ref={setDotRef('U')} id={'U'} className='blink-on absolute aspect-square w-[1.8%] bottom-[68%] left-[56.6%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['T'] && <div ref={setDotRef('T')} id={'T'} className='blink-on absolute aspect-square w-[1.8%] bottom-[68%] left-[53.5%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['S'] && <div ref={setDotRef('S')} id={'S'} className='blink-on absolute aspect-square w-[1.8%] bottom-[68%] left-[50.4%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['R'] && <div ref={setDotRef('R')} id={'R'} className='blink-on absolute aspect-square w-[1.8%] bottom-[68%] left-[47%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['48'] && <div ref={setDotRef('48')} id={'48'} className='blink-on absolute aspect-square w-[1.8%] bottom-[93%] left-[52.8%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['3'] && <div ref={setDotRef('3')} id={'3'} className='blink-on absolute aspect-square w-[1.5%] bottom-[22%] left-[41.9%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['4'] && <div ref={setDotRef('4')} id={'4'} className='blink-on absolute aspect-square w-[1.3%] bottom-[25.5%] left-[41.4%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['9'] && <div ref={setDotRef('9')} id={'9'} className='blink-on absolute aspect-square w-[1.3%] bottom-[31.2%] left-[38.7%] bg-[#01ff1f] rounded-full border' ></div>}
{showDots['10'] && <div ref={setDotRef('10')} id={'10'} className='blink-on absolute aspect-square w-[1.3%] bottom-[31.2%] left-[42.2%] bg-[#01ff1f] rounded-full border' ></div>}
</>
  )
}

export default GreenDots
