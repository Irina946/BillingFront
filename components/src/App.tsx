import { useState } from 'react'
import { ButtonBigViolet } from './components/button/buttonBig'
import { ButtonBigRed } from './components/button/buttonBigRed'
import { ButtonEmptyRed } from './components/button/buttonEmptyRed'
import { ButtonEmptyViolet } from './components/button/buttonEmptyViolet'
import { ButtonExit } from './components/button/buttonExit'
import { ButtonViolet } from './components/button/buttonViolet'
import { CardBalance } from './components/card/cardBalance'
import { CardServicesCategory } from './components/card/cardServicesCategory'
import { CardTariffs } from './components/card/cardTariffs'
import { InputSearch } from './components/input/inputSearch'
import { OptionTarif, SelectInput } from './components/input/select'
import { Logo } from './components/logo/logo'
import { InputDate } from './components/input/inputDate'
import { ModalTarif } from './components/modal/modalTarif'
import { ModalService } from './components/modal/modalService'
import { ModalReport } from './components/modal/modalReport'

function App() {
  const tarifs = [
    {
      label: "Тариф 1",
      value: "1",
      description: "Тариф с ограниченным интернетом на 10 ГБ",
      price: 500,
      duration: 1,
      internet: 10,
      is_unlimited_intenet: false,
      minute: 300,
      sms: 100
    },
    {
      label: "Тариф 2",
      value: "2",
      description: "Безлимитный тариф",
      price: 1500,
      duration: 1,
      internet: 100,
      is_unlimited_intenet: true,
      minute: 1000,
      sms: 500
    },
    {
      label: "Тариф 3",
      value: "3",
      description: "Тариф с 20 ГБ в месяц",
      price: 800,
      duration: 1,
      internet: 20,
      is_unlimited_intenet: false,
      minute: 500,
      sms: 200
    },
    {
      label: "Тариф 4",
      value: "4",
      description: "Дешевый тариф с 5 ГБ интернета",
      price: 300,
      duration: 1,
      internet: 5,
      is_unlimited_intenet: false,
      minute: 250,
      sms: 50
    },
    {
      label: "Тариф 5",
      value: "5",
      description: "Тариф с 30 ГБ интернета и 1000 минут",
      price: 1200,
      duration: 1,
      internet: 30,
      is_unlimited_intenet: false,
      minute: 1000,
      sms: 250
    },
    {
      label: "Тариф 6",
      value: "6",
      description: "Безлимитный тариф с неограниченными SMS",
      price: 1600,
      duration: 1,
      internet: 50,
      is_unlimited_intenet: true,
      minute: 1500,
      sms: 1000
    },
    {
      label: "Тариф 7",
      value: "7",
      description: "Тариф с 15 ГБ и 700 минут",
      price: 900,
      duration: 1,
      internet: 15,
      is_unlimited_intenet: false,
      minute: 700,
      sms: 300
    },
    {
      label: "Тариф 8",
      value: "8",
      description: "Недорогой тариф на 3 ГБ",
      price: 250,
      duration: 1,
      internet: 3,
      is_unlimited_intenet: false,
      minute: 200,
      sms: 30
    },
    {
      label: "Тариф 9",
      value: "9",
      description: "Тариф с 40 ГБ и безлимитом на минуты",
      price: 1400,
      duration: 1,
      internet: 40,
      is_unlimited_intenet: false,
      minute: Infinity, // Безлимит
      sms: 400
    },
    {
      label: "Тариф 10",
      value: "10",
      description: "Семейный тариф на двоих",
      price: 2200,
      duration: 1,
      internet: 60,
      is_unlimited_intenet: true,
      minute: 2000,
      sms: 800
    },
    {
      label: "Тариф 11",
      value: "11",
      description: "Тариф для путешественников",
      price: 3000,
      duration: 1,
      internet: 90,
      is_unlimited_intenet: false,
      minute: 2500,
      sms: 1000
    },
    {
      label: "Тариф 12",
      value: "12",
      description: "Тариф с 10 ГБ и 500 минут",
      price: 600,
      duration: 1,
      internet: 10,
      is_unlimited_intenet: false,
      minute: 500,
      sms: 100
    },
    {
      label: "Тариф 13",
      value: "13",
      description: "Тариф с 25 ГБ и неограниченными SMS",
      price: 950,
      duration: 1,
      internet: 25,
      is_unlimited_intenet: false,
      minute: 400,
      sms: Infinity // Безлимит
    },
    {
      label: "Тариф 14",
      value: "14",
      description: "Тариф с 12 ГБ интернета по акции",
      price: 700,
      duration: 1,
      internet: 12,
      is_unlimited_intenet: false,
      minute: 350,
      sms: 100
    },
    {
      label: "Тариф 15",
      value: "15",
      description: "Тариф с 8 ГБ и 200 минутами",
      price: 400,
      duration: 1,
      internet: 8,
      is_unlimited_intenet: false,
      minute: 200,
      sms: 50
    },
    {
      label: "Тариф 16",
      value: "16",
      description: "Тариф для студентов с 15 ГБ",
      price: 800,
      duration: 1,
      internet: 15,
      is_unlimited_intenet: false,
      minute: 600,
      sms: 200
    },
    {
      label: "Тариф 17",
      value: "17",
      description: "Тариф для бизнеса",
      price: 2500,
      duration: 1,
      internet: 75,
      is_unlimited_intenet: true,
      minute: 3000,
      sms: 500
    },
    {
      label: "Тариф 18",
      value: "18",
      description: "Тариф с 50 ГБ и безлимитным интернетом",
      price: 1850,
      duration: 1,
      internet: 50,
      is_unlimited_intenet: true,
      minute: 1500,
      sms: 400
    },
    {
      label: "Тариф 19",
      value: "19",
      description: "Тариф с 45 ГБ интернет трафика",
      price: 1700,
      duration: 1,
      internet: 45,
      is_unlimited_intenet: false,
      minute: 1200,
      sms: 600
    },
    {
      label: "Тариф 20",
      value: "20",
      description: "Тариф с 5 ГБ и 150 минутами",
      price: 500,
      duration: 1,
      internet: 5,
      is_unlimited_intenet: false,
      minute: 150,
      sms: 30
    }
  ];

  const [selectedTariff, setSelectedTariff] = useState<OptionTarif | null>(null);

  const [openModal1, setOpenModal1] = useState(false);
  const [openModalService, setOpenModalService] = useState(false);
  const [openModalReport, setOpenModalReport] = useState(false);

  const handleOpenModal1 = () => {
    setOpenModal1(true);
  };

  const handleCloseModal1 = () => {
    setOpenModal1(false);
  };

  const handleOpenModalservice = () => {
    setOpenModalService(true);
  };

  const handleCloseModalService = () => {
    setOpenModalService(false);
  };

  const handleOpenModalReport = () => {
    setOpenModalReport(true);
  };

  const handleCloseModalReport = () => {
    setOpenModalReport(false);
  };

  return (

    <>

      <div className='grid gap-8 grid-cols-1 text-start ml-[38%] mt-[50px] custom-scrollbar'>
        {/* <div>
        <p className='text-2xl text-left mb-[30px]'>Input</p>
        <Input
          type='text'
          placeholder='Placeholder' 
          id='id'
        />
      </div> */}
        <div>
          <p className='text-2xl text-left'>Select</p>
          <InputDate
            id="date"
            label='Начало'
          />
        </div>
        <div>
          <p className='text-2xl text-left'>Select</p>
          <SelectInput
            options={tarifs}
            defaultOption={selectedTariff}
            onChange={setSelectedTariff}
          />
        </div>
        <div>
          <p className='text-2xl text-left'>Большая фиолетовая кнопка</p>
          <ButtonBigViolet
            title='Открыть Modal Tarif'
            onClick={handleOpenModal1}
          />
          {openModal1 && <ModalTarif
            title='Модальное окно'
            description='Это идеальное решение для тех, кто ищет простоту и свободу в использовании мобильных услуг. Все, что вам нужно для подключения — это ноль затрат на оформление и ноль обязательств'
            price={0}
            minute={0}
            sms={0}
            internet={0}
            isConnect={false}
            onClose={handleCloseModal1}
          />}
        </div>
        <div>
          <p className='text-2xl text-left'>Фиолетовая кнопка</p>
          <ButtonViolet
            title='Подключено'
          /></div>
        <div>
          <p className='text-2xl text-left'>Пустая фиолетовая кнопка</p>
          <ButtonEmptyViolet
            title='Отключено'
          /></div>
        <div>
          <p className='text-2xl text-left'>Большая красная кнопка</p>
          <ButtonBigRed
            title='Открыть Modal Services'
            onClick={handleOpenModalservice}
          />
          {openModalService && <ModalService
            dateConnect='15.09.2023'
            date='15.12.2024'
            isConnect={false}
            price={200}
            writeOffPeriod='30 дней'
            title='Интернет'
            description="Идеальное решение для тех, кто ценит безграничные возможности общения и развлечений! "
            onClose={handleCloseModalService}
          />}
        </div>
        <div>
          <p className='text-2xl text-left'>Пустая красная кнопка</p>
          <ButtonEmptyRed
            size='small'
            title='Отчет'
            onClick={handleOpenModalReport}
          />
          {openModalReport && <ModalReport
            onClose={handleCloseModalReport} />}
        </div>
        <div>
          <p className='text-2xl text-left'>Кнопка выхода</p>
          <ButtonExit />
        </div>
        <div>
          <p className='text-2xl text-left'>Карточка категории тарифа</p>
          <CardServicesCategory
            title='Интернет'
            count='12'
          />
        </div>
        <div>
          <p className='text-2xl text-left'>Логотип</p>
          <Logo size={80} />
        </div>
        <div>
          <p className='text-2xl text-left'>Карточка баланса</p>
          <CardBalance
            user='operator'
            balance={1005.56}
            payment={200}
            date='29.11.2024'
            onClick={() => { }}
          />
        </div>

        <div>
          <p className='text-2xl text-left'>Input</p>
          <InputSearch
            id="1"
          />
        </div>
        <div>
          <p className='text-2xl text-left'>Карточка тарифа</p>
          <CardTariffs
            title='МегаТариф+'
            description='Описание  тарифа. Тариф самый лучший. Можно с ним сделать всё'
            price={100}
          />
        </div>


      </div>
    </>
  )
}

export default App
