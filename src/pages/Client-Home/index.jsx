import { Container, Filter, Slider,Footer} from "./styles";
import { PropertyCard } from "../../components/PropertyCard";
import {Header} from "../../components/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination,Autoplay} from "swiper/modules"
import 'swiper/css';
import 'swiper/css/pagination';


export function ClientHome() {
  return (
    <Container>
      <Header/>
      <Filter/>
      <Slider>
        <div>  <h2>Destaques para você</h2></div>
      <Swiper
           modules={[Pagination,Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{clickable: true}}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          >
            <SwiperSlide>

              <PropertyCard to={"/profile"}
                title={"Residencial Jardim Botânico"}
                img={"https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                description={"2 quartos, piscina e vista para o mar"}
                price={"100.000.000"}
              />
            </SwiperSlide>
            <SwiperSlide>
            <PropertyCard
                title={"Jardim el Dourado, Jackson house"}
                img={"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb3BlcnR5fGVufDB8fDB8fHww"}
                description={"2 quartos, piscina e vista para o mar"}
                price={"100.000.000"}
              />
        
            </SwiperSlide>
            <SwiperSlide>
            <PropertyCard
                title={"Reserva Verde"}
                img={"https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                description={"2 quartos, piscina e vista para o mar"}
                price={"100.000.000"}
              />
            </SwiperSlide>
            <SwiperSlide>
            <PropertyCard
                title={"Villa Toscana"}
                img={"https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                description={"2 quartos, piscina e vista para o mar"}
                price={"100.000.000"}
              />
            </SwiperSlide>
            <SwiperSlide>
            <PropertyCard
                title={"Horizonte Urbano"}
                img={"https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb3BlcnR5fGVufDB8fDB8fHww"}
                description={"2 quartos, piscina e vista para o mar"}
                price={"100.000.000"}
              />
            </SwiperSlide>
            <SwiperSlide>
            <PropertyCard
                title={"Edifício Central Park"}
                img={"https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb3BlcnR5fGVufDB8fDB8fHww"}
                description={"2 quartos, piscina e vista para o mar"}
                price={"100.000.000"}
              />
            </SwiperSlide>
            <SwiperSlide>
            <PropertyCard
                title={"Solar das Palmeiras: Cobertura duplex"}
                img={"https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb3BlcnR5fGVufDB8fDB8fHww"}
                description={"2 quartos, piscina e vista para o mar"}
                price={"100.000.000"}
              />
            </SwiperSlide>
            <SwiperSlide>
            <PropertyCard
                title={"Jardim el Dourado, Jackson house"}
                img={"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb3BlcnR5fGVufDB8fDB8fHww"}
                description={"2 quartos, piscina e vista para o mar"}
                price={"100.000.000"}
              />
            </SwiperSlide>
        </Swiper>
      </Slider>
      <Footer>
        <div className="footer-content">
          <h3>Entre em contato</h3>
          <p>E-mail: g4Construtora@gmail.com</p>
          <p>Telefone: (98) 99996666</p>
        </div>
      </Footer>
    </Container>
  )
}