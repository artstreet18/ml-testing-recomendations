import Button1 from './button1';
import prisma from '@/lib/prisma';


export default async function Table() {
  let node_ids: number[] = [];
    const recommendations = await prisma.recommendations.findMany({
        where: {
            node_id: { in: node_ids }
        },
        orderBy: {
            recommendation_priority: 'asc',
        },
    })
  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Введите данные о своём проекте</h2>
          <p className="text-sm text-gray-500">
            Выбор чекбоксов не обязателен
          </p>
        </div>
      </div>
      <div className="divide-y divide-gray-900/5">
        
          <div
            key='1223'
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-4">
              <div className="space-y-1">
                <p className="font-medium leading-none">Ваше ПО ориентировано на продукт или на исследование?</p>
                <input id="1" type="checkbox" name="checkBox1" value="1"/> Продукт
                <p className="text-sm text-gray-500"></p>
                <input id="2" type="checkbox" name="checkBox2" value="2"/> Исследование
              </div>
            </div>

          </div>
          <div
            key='1224'
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-4">
              <div className="space-y-1">
                <p className="font-medium leading-none">Ожидается ли изменение в данных?</p>
                <input id="3" type="checkbox" name="checkBox" value="3"/> Данные могут меняться
                <p className="text-sm text-gray-500"></p>
                <input id="4" type="checkbox" name="checkBox" value="4"/> Данные меняться не будут
              </div>
            </div>

          </div>
            <div
            key='1225'
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-4">
              <div className="space-y-1">
                <p className="font-medium leading-none">Существует ли паттерн в изменении данных?</p>
                <input id="5" type="checkbox" name="checkBox" value="1"/> Существует предполагаемое правило изменения данных
                <p className="text-sm text-gray-500"></p>
                <input id="6" type="checkbox" name="checkBox" value="2"/> О наличии правила не известно
              </div>
            </div>

          </div>
          <div
            key='1226'
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-4">
              <div className="space-y-1">
                <p className="font-medium leading-none">Вид паттерна:</p>
                <input id="7" type="checkbox" name="checkBox" value="1"/> Цикличность/Сезонность
                <p className="text-sm text-gray-500"></p>
                <input id="8" type="checkbox" name="checkBox" value="2"/> Переменный высчитываемый коэфицент
              </div>
            </div>

          </div>
          <div
            key='1227'
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-4">
              <div className="space-y-1">
                <p className="font-medium leading-none">Какие метрики возможно отслеживать</p>
                <input id="9" type="checkbox" name="checkBox" value="1"/> Целевые метрики
                <p className="text-sm text-gray-500"></p>
                <input id="10" type="checkbox" name="checkBox" value="2"/> Косвенные метрики
                <p className="text-sm text-gray-500"></p>
                <input id="11" type="checkbox" name="checkBox" value="2"/> Нет возможности быстро отслеживать метрики
              </div>
            </div>

          </div>
          <div
            key='1229'
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-4">
              <div className="space-y-1">
                <p className="font-medium leading-none">Цена обучения модели</p>
                <input id="12" type="checkbox" name="checkBox" value="1"/> Низкая
                <p className="text-sm text-gray-500"></p>
                <input id="13" type="checkbox" name="checkBox" value="2"/> Высокая
              </div>
            </div>

          </div>
          <div
            key='1230'
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-4">
              <div className="space-y-1">
                <p className="font-medium leading-none">Цена ошибки модели</p>
                <input id="14" type="checkbox" name="checkBox" value="1"/> Низкая
                <p className="text-sm text-gray-500"></p>
                <input id="15" type="checkbox" name="checkBox" value="2"/> Высокая
              </div>
            </div>
          </div>

          <div
            key='1231'
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-4">
              <div className="space-y-1">
                <p className="font-medium leading-none">Возможность оценки работы модели:</p>
                <input id="16" type="checkbox" name="checkBox" value="1"/> С возможностью оценки без ML
                <p className="text-sm text-gray-500"></p>
                <input id="17" type="checkbox" name="checkBox" value="2"/> Без возможности оценки без ML
                <p className="text-sm text-gray-500"></p>
                <input id="18" type="checkbox" name="checkBox" value="2"/> С возможностью применения RLHF
              </div>
            </div>
          </div>

          <div
            key='1232'
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-4">
              <div className="space-y-1">
                <p className="font-medium leading-none">Уровень нагрузки на ML сервис</p>
                <input id="19" type="checkbox" name="checkBox" value="1"/> Высокий
                <p className="text-sm text-gray-500"></p>
                <input id="20" type="checkbox" name="checkBox" value="2"/> Низкий
              </div>
            </div>
          </div>
          <Button1/>
      </div>    
    </div>
  )
}
