import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import smart from "./assets/smart.png";
import drums from "./assets/drums.png";
import smileArrow from "./assets/smile-arrow.png";
import gift from "./assets/gift.png";
import cashback from "./assets/cashback.png";
import percent from "./assets/percent.png";
import free from "./assets/free.png";
import transfer from "./assets/transfer.png";
import cash from "./assets/cash.png";
import discount from "./assets/discount.png";
import family from "./assets/family.png";
import wink from "./assets/wink.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import { Status } from "@alfalab/core-components/status";
import { List } from "@alfalab/core-components/list";
import { StatusBadge } from "@alfalab/core-components/status-badge";
import { sendDataToGA } from "./utils/events.ts";

interface Product {
  title: string;
  text: string;
  image: string;
  isNew?: boolean;
}

const familyProducts: Array<Product> = [
  {
    title: "Все преимущества доступны близким",
    text: "Делитесь бесплатно до конца года",
    image: family,
  },
];

const products: Array<Product> = [
  {
    title: "+1 топовая категория кэшбэка",
    text: "5% на самое популярное",
    image: smileArrow,
  },
  {
    title: "+1 попытка крутить барабан суперкэшбэка",
    text: "Выше шанс выиграть до 100% в случайной категории",
    image: drums,
  },
  {
    title: "Секретная подборка партнёров с кэшбэком",
    text: "Доступ к специальным предложениям",
    image: gift,
  },
  {
    title: "Увеличенный лимит кэшбэка",
    text: "7000 ₽ в месяц вместо 5000 ₽ за покупки в категориях",
    image: cashback,
  },
  {
    title: "+1% годовых",
    text: "По накопительному Альфа-Счёту на ежедневный остаток",
    image: percent,
  },
  {
    title: "Бесплатные уведомления",
    text: "Пуши и смс об операциях по всем дебетовым картам",
    image: free,
  },
  {
    title: "Бесплатные переводы",
    text: "По России без ограничений по сумме",
    image: transfer,
  },
  {
    title: "Бесплатное снятие наличных",
    text: "В банкоматах любых банков России",
    image: cash,
  },
  {
    title: "Скидка 20% на комиссию на бирже",
    text: "0,24% за сделки с ценными бумагами и валютой",
    image: discount,
  },
];

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [protectionClicked, setProtectionClicked] = useState(false);

  const setProtection = () => {
    return protectionClicked ? 1 : 0;
  };

  const submit = () => {
    setLoading(true);

    sendDataToGA({ is_film: setProtection() }).then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <img src={smart} alt="Картинка Альфа-Смарт" />
          <Typography.TitleResponsive
            tag="h1"
            view="medium"
            font="system"
            weight="bold"
          >
            Альфа-Смарт
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" color="secondary">
            Стоимость — 399 ₽ в месяц
          </Typography.Text>
        </div>

        <Gap size={32} />

        <div className={appSt.products}>
          <Typography.TitleResponsive
            font="system"
            tag="h2"
            weight="bold"
            view="small"
            className={appSt.productsTitle}
          >
            В вашей подписке
          </Typography.TitleResponsive>

          {products.map((product) => (
            <div className={appSt.product} key={product.title}>
              <div>
                <Typography.TitleResponsive
                  font="system"
                  view="small"
                  weight="bold"
                  tag="h3"
                  className={appSt.productTitle}
                >
                  {product.title}
                </Typography.TitleResponsive>

                <Typography.Text
                  view="secondary-large"
                  tag="p"
                  color="secondary"
                  className={appSt.productText}
                >
                  {product.text}
                </Typography.Text>
              </div>
              <img
                src={product.image}
                alt=""
                height={96}
                className={appSt.productIcon}
              />
            </div>
          ))}
        </div>

        <Gap size={32} />

        <div className={appSt.products}>
          <Typography.TitleResponsive
            font="system"
            tag="h2"
            weight="bold"
            view="small"
            className={appSt.productsTitle}
          >
            Семейный доступ
          </Typography.TitleResponsive>

          {familyProducts.map((product) => (
            <div className={appSt.product} key={product.title}>
              <div>
                <Typography.TitleResponsive
                  font="system"
                  view="small"
                  weight="bold"
                  tag="h3"
                  className={appSt.productTitle}
                >
                  {product.title}
                </Typography.TitleResponsive>

                <Typography.Text
                  view="secondary-large"
                  tag="p"
                  color="secondary"
                  className={appSt.productText}
                >
                  {product.text}
                </Typography.Text>
              </div>
              <img
                src={product.image}
                alt=""
                height={96}
                className={appSt.productIcon}
              />
            </div>
          ))}
        </div>

        <Gap size={40} />

        <div
          className={appSt.product}
          style={{
            flexDirection: "column",
            gap: "1rem",
            borderRadius: "1.5rem",
          }}
        >
          <Status
            view="contrast"
            uppercase={false}
            color="red"
            size={24}
            className={appSt.status}
          >
            Новое
          </Status>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography.TitleResponsive
              font="system"
              view="small"
              weight="bold"
              tag="h3"
            >
              Онлайн-кинотеатр
            </Typography.TitleResponsive>
            <img src={wink} alt="" height={40} className={appSt.productIcon} />
          </div>

          <List tag="ul" marker="•">
            <List.Item>Более 200 ТВ каналов</List.Item>
            <List.Item>27 000 фильмов и сериалов на любой вкус</List.Item>
            <List.Item>Доступ с любого устройства</List.Item>
          </List>

          <div
            style={{
              height: "56px",
              backgroundColor: protectionClicked
                ? "var(--color-light-decorative-muted-alt-green)"
                : "var(--color-light-neutral-translucent-200)",
              borderRadius: "1rem",
              padding: "1rem",
              textAlign: "center",
            }}
            onClick={() => {
              setProtectionClicked((prevState) => !prevState);
            }}
          >
            {protectionClicked ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <StatusBadge view="positive-checkmark" size={24} />
                <Typography.Text
                  view="primary-medium"
                  weight="bold"
                  tag="p"
                  color="positive"
                >
                  Добавлено
                </Typography.Text>
              </div>
            ) : (
              <Typography.Text view="primary-medium" tag="p" color="primary">
                Добавить за 99 ₽ в месяц
              </Typography.Text>
            )}
          </div>
        </div>
      </div>

      <Gap size={72} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" loading={loading} onClick={submit}>
          {protectionClicked ? "Подключить за 498 ₽" : "Подключить за 399 ₽"}
        </ButtonMobile>
      </div>
    </>
  );
};
