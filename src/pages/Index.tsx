import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [area, setArea] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: 'Электромонтаж квартир',
      description: 'Полный комплекс электромонтажных работ для квартир и жилых помещений',
      icon: 'Home',
      price: 'от 1500 ₽/м²',
      features: ['Замена проводки', 'Установка розеток', 'Монтаж светильников']
    },
    {
      id: 2,
      title: 'Коммерческие объекты',
      description: 'Электромонтаж офисов, магазинов и торговых центров',
      icon: 'Building2',
      price: 'от 2000 ₽/м²',
      features: ['Силовые линии', 'Слаботочка', 'Освещение']
    },
    {
      id: 3,
      title: 'Загородные дома',
      description: 'Комплексное электрообеспечение частных домов и коттеджей',
      icon: 'Castle',
      price: 'от 1800 ₽/м²',
      features: ['Ввод электричества', 'Внутренняя разводка', 'Уличное освещение']
    },
    {
      id: 4,
      title: 'Аварийные работы',
      description: 'Срочное устранение неисправностей 24/7',
      icon: 'Zap',
      price: 'от 3000 ₽',
      features: ['Выезд за 30 мин', 'Диагностика', 'Ремонт на месте']
    }
  ];

  const projects = [
    {
      id: '001',
      title: 'Электромонтаж 3-комн квартиры',
      address: 'ул. Ленина, 45',
      status: 'В работе',
      progress: 65,
      date: '15.01.2026'
    },
    {
      id: '002',
      title: 'Офис 120 м²',
      address: 'пр. Мира, 12',
      status: 'Планирование',
      progress: 20,
      date: '18.01.2026'
    },
    {
      id: '003',
      title: 'Загородный дом',
      address: 'КП "Солнечный"',
      status: 'Завершен',
      progress: 100,
      date: '10.01.2026'
    }
  ];

  const priceRates = {
    'apartment': 1500,
    'commercial': 2000,
    'house': 1800,
    'emergency': 3000
  };

  const calculatePrice = () => {
    if (!area || !serviceType) return;
    const areaNum = parseFloat(area);
    const rate = priceRates[serviceType as keyof typeof priceRates] || 0;
    setCalculatedPrice(areaNum * rate);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'В работе': return 'bg-primary text-primary-foreground';
      case 'Планирование': return 'bg-secondary text-secondary-foreground';
      case 'Завершен': return 'bg-green-500 text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  ЭлектроПро
                </h1>
                <p className="text-xs text-muted-foreground">Электромонтажные услуги</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <Button variant="ghost" className="font-medium">Главная</Button>
              <Button variant="ghost" className="font-medium">Услуги</Button>
              <Button variant="ghost" className="font-medium">Проекты</Button>
              <Button variant="ghost" className="font-medium">Контакты</Button>
            </nav>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
                Работаем с 2010 года
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6 leading-tight">
                Профессиональный
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  электромонтаж
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Выполняем электромонтажные работы любой сложности. Быстро, качественно, с гарантией.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Наши работы
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold font-heading text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-heading text-secondary">12</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-heading text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-card border rounded-3xl p-8 shadow-2xl">
                <Icon name="Zap" className="text-primary mb-4" size={48} />
                <h3 className="text-2xl font-bold font-heading mb-4">Быстрый расчет</h3>
                <p className="text-muted-foreground mb-6">
                  Получите предварительную стоимость работ за 1 минуту
                </p>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="quick-area">Площадь (м²)</Label>
                    <Input 
                      id="quick-area" 
                      type="number" 
                      placeholder="Например: 85"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="quick-type">Тип объекта</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Выберите тип" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartment">Квартира</SelectItem>
                        <SelectItem value="house">Дом</SelectItem>
                        <SelectItem value="commercial">Офис/Коммерция</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                    Рассчитать
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl font-bold font-heading mb-4">Каталог услуг</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Предоставляем полный спектр электромонтажных работ для любых объектов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-to-r from-primary to-secondary">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-2xl border-2">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Calculator" className="text-white" size={32} />
              </div>
              <CardTitle className="text-3xl font-heading">Калькулятор стоимости работ</CardTitle>
              <CardDescription className="text-lg">
                Рассчитайте предварительную стоимость электромонтажа вашего объекта
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="area" className="text-base">Площадь помещения (м²)</Label>
                  <Input 
                    id="area"
                    type="number"
                    placeholder="Введите площадь"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="mt-2 text-lg"
                  />
                </div>
                <div>
                  <Label htmlFor="service-type" className="text-base">Тип работ</Label>
                  <Select value={serviceType} onValueChange={setServiceType}>
                    <SelectTrigger id="service-type" className="mt-2 text-lg">
                      <SelectValue placeholder="Выберите тип работ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Электромонтаж квартиры (1500 ₽/м²)</SelectItem>
                      <SelectItem value="commercial">Коммерческий объект (2000 ₽/м²)</SelectItem>
                      <SelectItem value="house">Загородный дом (1800 ₽/м²)</SelectItem>
                      <SelectItem value="emergency">Аварийные работы (3000 ₽ фикс)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                onClick={calculatePrice} 
                className="w-full bg-gradient-to-r from-primary to-secondary text-lg py-6"
                disabled={!area || !serviceType}
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>

              {calculatedPrice !== null && (
                <div className="mt-6 p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border-2 border-primary/20 animate-scale-in">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Предварительная стоимость</div>
                    <div className="text-5xl font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {calculatedPrice.toLocaleString()} ₽
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      * Точная стоимость определяется после выезда специалиста
                    </p>
                    <Button className="mt-6 bg-gradient-to-r from-primary to-secondary">
                      <Icon name="Phone" size={16} className="mr-2" />
                      Оставить заявку
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Управление</Badge>
            <h2 className="text-4xl font-bold font-heading mb-4">Мои заказы и проекты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Отслеживайте статус ваших заказов в режиме реального времени
            </p>
          </div>

          <Tabs defaultValue="active" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="active" className="text-base">
                <Icon name="Clock" size={18} className="mr-2" />
                Активные
              </TabsTrigger>
              <TabsTrigger value="planned" className="text-base">
                <Icon name="CalendarDays" size={18} className="mr-2" />
                Запланированные
              </TabsTrigger>
              <TabsTrigger value="completed" className="text-base">
                <Icon name="CheckCircle2" size={18} className="mr-2" />
                Завершенные
              </TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-4">
              {projects.filter(p => p.status === 'В работе').map(project => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline">№ {project.id}</Badge>
                          <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                        </div>
                        <h3 className="text-xl font-bold font-heading mb-1">{project.title}</h3>
                        <p className="text-muted-foreground flex items-center gap-2">
                          <Icon name="MapPin" size={16} />
                          {project.address}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">{project.progress}%</div>
                        <div className="text-sm text-muted-foreground">{project.date}</div>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 mb-4">
                      <div 
                        className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Icon name="Eye" size={16} className="mr-2" />
                        Подробнее
                      </Button>
                      <Button className="flex-1 bg-gradient-to-r from-primary to-secondary">
                        <Icon name="MessageSquare" size={16} className="mr-2" />
                        Связаться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="planned" className="space-y-4">
              {projects.filter(p => p.status === 'Планирование').map(project => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline">№ {project.id}</Badge>
                          <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                        </div>
                        <h3 className="text-xl font-bold font-heading mb-1">{project.title}</h3>
                        <p className="text-muted-foreground flex items-center gap-2">
                          <Icon name="MapPin" size={16} />
                          {project.address}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-secondary">{project.progress}%</div>
                        <div className="text-sm text-muted-foreground">{project.date}</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Icon name="Eye" size={16} className="mr-2" />
                        Подробнее
                      </Button>
                      <Button className="flex-1 bg-gradient-to-r from-primary to-secondary">
                        <Icon name="MessageSquare" size={16} className="mr-2" />
                        Связаться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              {projects.filter(p => p.status === 'Завершен').map(project => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline">№ {project.id}</Badge>
                          <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                        </div>
                        <h3 className="text-xl font-bold font-heading mb-1">{project.title}</h3>
                        <p className="text-muted-foreground flex items-center gap-2">
                          <Icon name="MapPin" size={16} />
                          {project.address}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-green-500">{project.progress}%</div>
                        <div className="text-sm text-muted-foreground">{project.date}</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Icon name="Eye" size={16} className="mr-2" />
                        Подробнее
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Icon name="Star" size={16} className="mr-2" />
                        Оставить отзыв
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold font-heading">ЭлектроПро</span>
              </div>
              <p className="text-background/70">
                Профессиональные электромонтажные услуги с 2010 года
              </p>
            </div>
            <div>
              <h4 className="font-bold font-heading mb-4">Услуги</h4>
              <ul className="space-y-2 text-background/70">
                <li>Электромонтаж квартир</li>
                <li>Коммерческие объекты</li>
                <li>Загородные дома</li>
                <li>Аварийные работы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold font-heading mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@electropro.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Москва
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold font-heading mb-4">Работаем</h4>
              <p className="text-background/70">Пн-Вс: 8:00 - 22:00</p>
              <p className="text-background/70">Аварийная служба: 24/7</p>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>© 2026 ЭлектроПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
