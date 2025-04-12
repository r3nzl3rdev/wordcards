import React from 'react'
import ProtectedRoute from '../components/ProtectedRoute'
import Button from '../components/Button'

const Settings: React.FC = () => {
  return (
    <ProtectedRoute>
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 max-w-[945px]">
          <h1 className="text-2xl md:text-4xl font-bold">Akkaunt sozlamari</h1>
          <p>Ro'yhatdan o'tilgan sana: <b>10/12/2024 00:27</b></p>
          <p>
            Bu yerda siz hisobingiz bilan bog'langan parol yoki elektron pochta manzilini o'zgartirishingiz mumkin. <br />
            So'nggi login: <b> 12.04.2025 08:09</b>.
          </p>
          <p className='text-2xl font-bold'>
            Parol
          </p>
          <p>O'rnatilgan <b>10/12/2024 00:27</b></p>
          <Button className='bg-yellow-200 w-fit rounded-md hover:bg-yellow-300'>
            <img className='w-4 mr-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADAklEQVR4nN2aW4hNURjHf45bKXLJg2hQbhFRJnmTojQx48yE4oEnT8PQPBBeRMqLF41LKbm+KQ/uihi3MUOUJzwQhdxSB2cMW4tv12539tpr733W2XvPv746p87+1vdbl299a+0DtddgYAnQAXQBb4E+4CvwDDgNrAdGklEVgA3AG8AxsBJwBKgjQ5oE9BgCOD77AeyQkUxVC4F3MSEcj3UCY9OEKFUBwhF7AcyoNcRk4EsVIRyxj8D0WkEMkKlgEthr4JZksE+Gz7ys1TRbaxDMZWC+77mBkpovGa4Z9XureqoJ4A+wzcDHStlbdDCbbULMC2l8TwRfs4BXGl/fgAm2QLZrGn4sG2MUzQQ+a3wesMTBWU2jq2L6bNb4VJDDsKAbAQ3+BkYl8HtBA7MOC7qjmc9JtFgDchgLuqipmZKky4Imi3VjQfs1PTc7o6NdUas1IHtJps4Av7+woHHiOKhOGpOg7Hkf4FfVdFZ0TjMqJxJU0k6APcGSlobs7ltjjMZ1jb9jWNRVTcNqT2mP4GtnSMcULXIwVVKuLoCTIeV4AdgthWaQD3V5McQWhHu+bgsBcUuMfcAcz3PDpZx5ZPB8qy2IFuABMFS+HzIIxrU+g9Lda+pCY5AtiF5pRF3lIA2djxCcY2gq5U6zAdHsgXBtlwfmYBUhvgOLagXhmrqTctWq+Z2pqcVdbwOiaBBchyezzAXux4S4BoxPC6LSZYHa4JqAmyGp1RFT2avBBkBUiDKwIsDPRGAjcFR6XJXkV4DjsmlOsQUQB0L1fuZUzAtEA3AbuAssr3DXFAWiMSUGNklB5wZzz7Nz5gaivcL2P9ozSj8NIXrTnE5bfMF0eV59NeVlTbT4cvlDH0Q5DyOh9NwTTLfnEq0xIoRaQ6nqQ3+AQCrUnrxDuMfJEf8+/S8jokBYPSvH1bKIKTYzIxEXQh1H15BB1UcciUxOJ+SlpCmEOglmVqX+AEHI+7ncQCidCoFQJUwuVBfwp5dyniAQqXPzGZlmas2oC+gFaQcVRX8BVhD1p69q7ncAAAAASUVORK5CYII=" alt="password1" />
            Parol o'zgartish
          </Button>
          <p className='mt-2 text-2xl font-bold'>
            Email
          </p>
          <p>
            Email manzilingiz: <b>zawkindev@gmail.com</b>
          </p>
          <Button className='bg-blue-500 w-fit rounded-md text-white hover:bg-blue-400'>
            <img className='w-5 mr-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABD0lEQVR4nO2UvU7DMBCAXYoQCJWhExK8TMTMRLduwNatS1+BATZWJrp1Y2NiTccO7dYH6BMgCvSrTjpLVmTynyX4k6wkZ/s+y/HZmECgtQDnwILmWAIXSemVPvtA3IA0ltyuy4q/gIG+nwLvNUo/gJ7mvgY+XbHwA9zq9xEwq0H6BhxrziHwLcGkWNgBY411gZcK0lfgUHONgF/b4RNbHjTeAR5LSJ+BA80xSXamiTMnp+Au+sk3wGSIhelf2+Uh928yOcT2gJw4B2TrGVPoYJqcYlsSZ25JOH1SijdFStEUEAtz5xKIgLW2yLl8ZAx1i4UVcFn1ujUlxMIGuJMFaLvXGE2LK2OC+P9sdSDQKvZNXEL/XxSdmQAAAABJRU5ErkJggg==" alt="new-post"/>
              Email o'zgartish</Button>
          <p className='py-2 px-4 max-w-[500px] rounded-md shadow-gray-400 shadow-lg bg-sky-100'>
            Biz spam bilan kurashamiz, shuning uchun elektron pochtangiz sizdan boshqa hech kimga ko'rinmaydi.
          </p>
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default Settings
