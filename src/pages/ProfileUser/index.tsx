import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img, Heading } from "../../components";

export default function ProfileUserPage() {
  return (
    <>
      <Helmet>
        <title>Wassim's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="relative h-[1929px] w-full bg-white-A700">
        <div className="absolute bottom-[-410.00px] right-[0.00px] m-auto h-[2248px] w-[80%]">
          <div className="absolute left-0 right-0 top-[0.00px] m-auto flex w-full flex-col gap-[45px] p-[23px] sm:p-5">
            <div className="ml-[33px] mt-[34px] flex w-[90%] flex-col items-start md:ml-0 md:w-full">
              <div className="mx-auto flex w-full max-w-[742px] items-start gap-[30px] md:flex-col md:p-5">
                <Img src="images/img_ellipse_3.png" alt="circleimage" className="h-[144px] w-[144px] rounded-[50%]" />
                <div className="flex flex-col items-start gap-5">
                  <div className="flex flex-col items-start justify-center gap-2.5">
                    <Heading size="3xl" as="h1" className="tracking-[-1.00px] !text-black-900">
                      Jane Doe
                    </Heading>
                    <Text size="md" as="p" className="!text-gray-900_01">
                      @Jane11
                    </Text>
                  </div>
                  <div className="flex gap-5 sm:flex-col">
                    <div className="flex gap-1">
                      <Img src="images/img_lucide_link.svg" alt="lucidelink_one" className="h-[20px] w-[20px]" />
                      <Text size="md" as="p" className="self-end !font-medium !text-blue-500">
                        linkedin.com/in/JaneDoe
                      </Text>
                    </div>
                    <div className="flex items-center gap-1">
                      <Img
                        src="images/img_ep_location.svg"
                        alt="eplocation_one"
                        className="h-[20px] w-[20px] self-start"
                      />
                      <Text size="md" as="p" className="self-end !font-medium">
                        Tunis, Tunisie
                      </Text>
                    </div>
                    <div className="flex items-center gap-1">
                      <Img
                        src="images/img_solar_calendar_outline.svg"
                        alt="solarcalendar"
                        className="h-[20px] w-[20px] self-start"
                      />
                      <Text size="md" as="p" className="self-end !font-medium">
                        Rejoint en Mars 2024
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Text size="md" as="p" className="w-[82%] self-end text-justify leading-[140%] md:w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget mauris hendrerit, feugiat leo
                vitae, consequat tortor. Cras tempor lectus eu orci congue tincidunt.
              </Text>
            </div>
            <div className="mb-[142px] ml-[17px] flex flex-col items-start md:ml-0">
              <Heading as="h2">Réalisations</Heading>
              <div className="mt-[21px] flex gap-[19px] self-stretch md:flex-col">
                <div className="flex w-full justify-between gap-5 rounded-[10px] border-[0.5px] border-solid border-blue_gray-100_54 bg-white-A700 p-[25px] shadow-xs sm:p-5">
                  <div className="ml-3 flex flex-col items-start gap-0.5 md:ml-0">
                    <Heading size="s" as="h3" className="h-[17px]">
                      10
                    </Heading>
                    <Text size="s" as="p">
                      contributions
                    </Text>
                  </div>
                  <div className="mr-3 flex flex-col items-start gap-[3px] py-px md:mr-0">
                    <Heading size="s" as="h4">
                      200 DT
                    </Heading>
                    <Text size="s" as="p">
                      Total
                    </Text>
                  </div>
                </div>
                <div className="flex w-full items-center justify-center gap-3.5 rounded-[10px] border-[0.5px] border-solid border-blue_gray-100_54 bg-white-A700 p-[22px] shadow-xs sm:p-5">
                  <Img src="images/img_medal_1.png" alt="medalone_one" className="h-[46px] w-[46px] object-cover" />
                  <div className="flex flex-col items-start gap-0.5">
                    <Heading size="md" as="h5">
                      2
                    </Heading>
                    <Text size="s" as="p">
                      Donateur du mois
                    </Text>
                  </div>
                </div>
                <div className="flex items-center gap-3.5 rounded-[10px] border-[0.5px] border-solid border-blue_gray-100_54 bg-white-A700 p-[22px] shadow-xs sm:p-5">
                  <Img src="images/img_image_12.png" alt="imagetwelve_one" className="h-[44px] object-cover" />
                  <div className="flex flex-col items-start">
                    <Heading size="md" as="h6">
                      5
                    </Heading>
                    <Text size="s" as="p">
                      Association différente
                    </Text>
                  </div>
                </div>
                <div className="flex w-full items-center gap-3.5 rounded-[10px] border-[0.5px] border-solid border-blue_gray-100_54 bg-white-A700 p-[22px] shadow-xs sm:p-5">
                  <Img src="images/img_image_11.png" alt="imageeleven_one" className="h-[46px] w-[46px] object-cover" />
                  <div className="flex flex-col items-start justify-center gap-[3px]">
                    <Heading size="md" as="h6">
                      1
                    </Heading>
                    <Text size="s" as="p">
                      Top donneur
                    </Text>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-[51px] flex w-full max-w-[1065px] items-center self-stretch md:flex-col md:p-5">
                <div className="flex flex-1 items-start md:flex-col md:self-stretch">
                  <Heading as="h5">Posts</Heading>
                  <div className="relative ml-[-53px] flex flex-1 flex-col items-start gap-7 md:ml-0 md:self-stretch">
                    <Heading as="h5" className="self-end !font-bold">
                      Dons récents
                    </Heading>
                    <div className="flex w-[78%] justify-center rounded-[20px] border border-solid border-black-900_54 bg-white-A700 md:w-full">
                      <div className="mb-3 mt-[26px] flex w-[93%] flex-col items-center gap-[22px] md:w-full md:p-5">
                        <Text size="md" as="p" className="leading-[140%]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget mauris hendrerit,
                          feugiat leo vitae, consequat tortor. Cras tempor lectus eu orci congue tincidunt.
                        </Text>
                        <Img src="images/img_1_3.png" alt="image" className="h-[267px] w-[63%] object-cover" />
                        <div className="mr-[15px] flex w-[43%] items-center self-end md:mr-0 md:w-full">
                          <div className="flex h-[12px] w-[5%] items-center self-end bg-[url(/public/images/img_group_11.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                            <div className="ml-0.5 h-[6px] w-px self-end bg-blue-500 md:ml-0" />
                          </div>
                          <Text as="p" className="ml-[7px]">
                            <span className="text-blue_gray-900">15</span>
                            <span className="text-blue_gray-900">&nbsp;J’aime</span>
                          </Text>
                          <Img
                            src="images/img_clock.svg"
                            alt="clock_one"
                            className="ml-[13px] h-[8px] w-[8px] self-end"
                          />
                          <Text as="p" className="ml-2">
                            <span className="text-blue_gray-900">5</span>
                            <span className="text-blue_gray-900">&nbsp;Commentaires</span>
                          </Text>
                          <div className="ml-2 flex h-[11px] items-center self-end bg-[url(/public/images/img_group_12.svg)] bg-cover bg-no-repeat p-0.5 md:h-auto">
                            <Img src="images/img_contrast.svg" alt="contrast_one" className="h-[6px] w-[6px]" />
                          </div>
                          <Text as="p" className="ml-2">
                            <span className="text-blue_gray-900">20</span>
                            <span className="text-blue_gray-900">&nbsp;V</span>
                            <span className="text-blue_gray-900">ue</span>
                            <span className="text-blue_gray-900">s</span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative ml-[-134px] flex w-[23%] flex-col gap-[23px] self-end md:ml-0 md:w-full">
                  <div className="flex flex-col items-start gap-[17px] rounded-[20px] border border-solid border-black-900_44 bg-white-A700 p-[17px]">
                    <div className="ml-[11px] flex flex-wrap items-end md:ml-0">
                      <Text size="lg" as="p" className="mb-[11px] !font-lato !text-black-900">
                        Restauration d&#39;une école
                      </Text>
                      <Img src="images/img_donation_1.png" alt="image" className="h-[24px] w-[24px] object-cover" />
                      <Heading as="h5" className="ml-[5px] !font-lato !font-black !text-blue_gray-700">
                        10 DT
                      </Heading>
                    </div>
                    <Heading
                      size="lg"
                      as="h6"
                      className="text-shadow-ts mb-[9px] ml-[11px] !font-lato !font-bold !text-black-900 md:ml-0"
                    >
                      ِassociation AMAL
                    </Heading>
                  </div>
                  <div className="flex flex-col items-start gap-[17px] rounded-[20px] border border-solid border-black-900_44 bg-white-A700 p-[17px]">
                    <div className="ml-[11px] flex flex-wrap items-end md:ml-0">
                      <Text size="lg" as="p" className="mb-[11px] !font-lato !text-black-900">
                        Restauration d&#39;une école
                      </Text>
                      <Img
                        src="images/img_donation_1.png"
                        alt="donationone_one"
                        className="h-[24px] w-[24px] object-cover"
                      />
                      <Heading as="h5" className="ml-[5px] !font-lato !font-black !text-blue_gray-700">
                        10 DT
                      </Heading>
                    </div>
                    <Heading
                      size="lg"
                      as="h6"
                      className="text-shadow-ts mb-[9px] ml-[11px] !font-lato !font-bold !text-black-900 md:ml-0"
                    >
                      ِassociation AMAL
                    </Heading>
                  </div>
                  <div className="flex flex-col items-start gap-[17px] rounded-[20px] border border-solid border-black-900_44 bg-white-A700 p-[17px]">
                    <div className="ml-[11px] flex flex-wrap items-end md:ml-0">
                      <Text size="lg" as="p" className="mb-[11px] !font-lato !text-black-900">
                        Restauration d&#39;une école
                      </Text>
                      <Img
                        src="images/img_donation_1.png"
                        alt="donationone_one"
                        className="h-[24px] w-[24px] object-cover"
                      />
                      <Heading as="h5" className="ml-[5px] !font-lato !font-black !text-blue_gray-700">
                        10 DT
                      </Heading>
                    </div>
                    <Heading
                      size="lg"
                      as="h6"
                      className="text-shadow-ts mb-[9px] ml-[11px] !font-lato !font-bold !text-black-900 md:ml-0"
                    >
                      ِassociation AMAL
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="ml-[3px] mt-7 flex w-[66%] flex-col gap-[43px] md:ml-0 md:w-full">
                <div className="flex flex-1 flex-col items-end justify-end gap-[22px] rounded-[20px] border border-solid border-black-900_54 bg-white-A700">
                  <Text size="md" as="p" className="mt-[26px] w-[93%] leading-[140%] md:w-full md:p-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget mauris hendrerit, feugiat
                    leo vitae, consequat tortor. Cras tempor lectus eu orci congue tincidunt.
                  </Text>
                  <Img src="images/img_1_3.png" alt="image" className="h-[267px] w-[58%] self-center object-cover" />
                  <div className="mb-3 mr-[15px] flex w-[39%] items-center md:mr-0 md:w-full md:p-5">
                    <div className="flex h-[12px] w-[5%] items-center self-end bg-[url(/public/images/img_group_11.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                      <div className="ml-0.5 h-[6px] w-px self-end bg-blue-500 md:ml-0" />
                    </div>
                    <Text as="p" className="ml-[7px]">
                      <span className="text-blue_gray-900">15</span>
                      <span className="text-blue_gray-900">&nbsp;J’aime</span>
                    </Text>
                    <Img src="images/img_clock.svg" alt="15_jaime_one" className="ml-[13px] h-[8px] w-[8px] self-end" />
                    <Text as="p" className="ml-2">
                      <span className="text-blue_gray-900">5</span>
                      <span className="text-blue_gray-900">&nbsp;Commentaires</span>
                    </Text>
                    <div className="ml-2 flex h-[11px] items-center self-end bg-[url(/public/images/img_group_12.svg)] bg-cover bg-no-repeat p-0.5 md:h-auto">
                      <Img src="images/img_contrast.svg" alt="15_jaime_three" className="h-[6px] w-[6px]" />
                    </div>
                    <Text as="p" className="ml-2">
                      <span className="text-blue_gray-900">20</span>
                      <span className="text-blue_gray-900">&nbsp;V</span>
                      <span className="text-blue_gray-900">ue</span>
                      <span className="text-blue_gray-900">s</span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-end justify-end gap-[22px] rounded-[20px] border border-solid border-black-900_54 bg-white-A700">
                  <Text size="md" as="p" className="mt-[26px] w-[93%] leading-[140%] md:w-full md:p-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget mauris hendrerit, feugiat
                    leo vitae, consequat tortor. Cras tempor lectus eu orci congue tincidunt.
                  </Text>
                  <Img src="images/img_1_3.png" alt="image" className="h-[267px] w-[58%] self-center object-cover" />
                  <div className="mb-3 mr-[15px] flex w-[39%] items-center md:mr-0 md:w-full md:p-5">
                    <div className="flex h-[12px] w-[5%] items-center self-end bg-[url(/public/images/img_group_11.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                      <div className="ml-0.5 h-[6px] w-px self-end bg-blue-500 md:ml-0" />
                    </div>
                    <Text as="p" className="ml-[7px]">
                      <span className="text-blue_gray-900">15</span>
                      <span className="text-blue_gray-900">&nbsp;J’aime</span>
                    </Text>
                    <Img src="images/img_clock.svg" alt="clock_one" className="ml-[13px] h-[8px] w-[8px] self-end" />
                    <Text as="p" className="ml-2">
                      <span className="text-blue_gray-900">5</span>
                      <span className="text-blue_gray-900">&nbsp;Commentaires</span>
                    </Text>
                    <div className="ml-2 flex h-[11px] items-center self-end bg-[url(/public/images/img_group_12.svg)] bg-cover bg-no-repeat p-0.5 md:h-auto">
                      <Img src="images/img_contrast.svg" alt="contrast_one" className="h-[6px] w-[6px]" />
                    </div>
                    <Text as="p" className="ml-2">
                      <span className="text-blue_gray-900">20</span>
                      <span className="text-blue_gray-900">&nbsp;V</span>
                      <span className="text-blue_gray-900">ue</span>
                      <span className="text-blue_gray-900">s</span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0.00px] left-[0.00px] m-auto flex w-[62%] flex-col items-end justify-end gap-[22px] rounded-[20px] border border-solid border-black-900_54 bg-white-A700">
            <Text size="md" as="p" className="mt-[26px] w-[93%] leading-[140%] md:w-full md:p-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget mauris hendrerit, feugiat leo
              vitae, consequat tortor. Cras tempor lectus eu orci congue tincidunt.
            </Text>
            <Img src="images/img_1_3.png" alt="image_one" className="h-[267px] w-[58%] self-center object-cover" />
            <div className="mb-3 mr-[15px] flex w-[39%] items-center md:mr-0 md:w-full md:p-5">
              <div className="flex h-[12px] w-[5%] items-center self-end bg-[url(/public/images/img_group_11.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                <div className="ml-0.5 h-[6px] w-px self-end bg-blue-500 md:ml-0" />
              </div>
              <Text as="p" className="ml-[7px]">
                <span className="text-blue_gray-900">15</span>
                <span className="text-blue_gray-900">&nbsp;J’aime</span>
              </Text>
              <Img src="images/img_clock.svg" alt="clock_three" className="mb-0.5 ml-[13px] h-[8px] w-[8px] self-end" />
              <Text as="p" className="ml-2">
                <span className="text-blue_gray-900">5</span>
                <span className="text-blue_gray-900">&nbsp;Commentaires</span>
              </Text>
              <div className="ml-2 flex h-[11px] items-center bg-[url(/public/images/img_group_12.svg)] bg-cover bg-no-repeat p-0.5 md:h-auto">
                <Img src="images/img_contrast.svg" alt="contrast_three" className="h-[6px] w-[6px]" />
              </div>
              <Text as="p" className="ml-2">
                <span className="text-blue_gray-900">20</span>
                <span className="text-blue_gray-900">&nbsp;V</span>
                <span className="text-blue_gray-900">ue</span>
                <span className="text-blue_gray-900">s</span>
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute left-[4%] top-[8%] m-auto flex items-center gap-3">
          <Img src="images/img_winner_1.png" alt="winnerone_one" className="h-[24px] w-[24px] object-cover" />
          <Text size="lg" as="p" className="self-end !font-lato !text-gray-900">
            Mes récompenses
          </Text>
        </div>
        <div className="absolute left-0 right-0 top-[0.00px] m-auto flex w-[98%] items-start md:relative md:flex-col">
          <Img
            src="images/img_4vhpznpa_400x400.png"
            alt="4vhpznpa_one"
            className="relative z-[1] h-[153px] w-[12%] object-cover md:w-full"
          />
          <header className="relative ml-[-19px] mt-[33px] flex flex-1 items-center justify-between gap-5 md:ml-0 md:flex-col md:self-stretch md:p-5">
            <Heading
              size="2xl"
              as="h4"
              className="w-[6%] text-center !font-lato !text-light_blue-A400 line-through md:w-full"
            >
              <>
                AID
                <br />
                إيد بإيد
              </>
            </Heading>
            <div className="flex w-[47%] items-center justify-center md:w-full sm:flex-col">
              <a href="Acceuil" target="_blank" rel="noreferrer" className="self-start">
                <Text size="lg" as="p" className="!font-lato !text-gray-900">
                  Acceuil
                </Text>
              </a>
              <a href="Contact" target="_blank" rel="noreferrer" className="ml-[43px] self-start sm:ml-0">
                <Text size="lg" as="p" className="!font-lato !text-gray-900">
                  Contact
                </Text>
              </a>
              <div className="ml-[39px] flex flex-1 flex-col sm:ml-0 sm:self-stretch">
                <div className="relative z-[2] flex">
                  <div className="relative h-[22px] flex-1 self-end md:h-auto">
                    <Text size="lg" as="p" className="!font-lato !text-gray-900">
                      Catégories
                    </Text>
                    <Img
                      src="images/img_image_2.png"
                      alt="imagetwo_one"
                      className="absolute bottom-0 right-[19.00px] top-0 my-auto h-[18px] object-cover"
                    />
                  </div>
                  <a href="Feed" target="_blank" rel="noreferrer" className="self-start">
                    <Text size="lg" as="p" className="text-right !font-lato !text-gray-900">
                      Feed
                    </Text>
                  </a>
                </div>
                <div className="relative mt-[-22px] h-[22px] w-[68%] md:h-auto">
                  <Text size="lg" as="p" className="!font-lato !text-gray-900">
                    Catégories
                  </Text>
                  <Img
                    src="images/img_image_2.png"
                    alt="imagetwo_one"
                    className="absolute bottom-0 right-[19.00px] top-0 my-auto h-[18px] object-cover"
                  />
                </div>
              </div>
              <a href="#" className="ml-[38px] self-start sm:ml-0">
                <Text size="lg" as="p" className="!font-lato !text-black-900">
                  Success stories{" "}
                </Text>
              </a>
              <a href="Profile" target="_blank" rel="noreferrer" className="ml-[52px] sm:ml-0">
                <Text size="lg" as="p" className="text-right !font-lato !text-black-900">
                  Profile
                </Text>
              </a>
            </div>
            <Button
              size="xs"
              shape="round"
              className="min-w-[156px] border-light_blue-A400 font-lato font-semibold !text-light_blue-A400"
            >
              Se déconnecter{" "}
            </Button>
          </header>
        </div>
      </div>
    </>
  );
}
