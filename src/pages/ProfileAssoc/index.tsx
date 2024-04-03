import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Text, Img } from "../../components";

export default function ProfileAssocPage() {
  return (
    <>
      <Helmet>
        <title>Wassim's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-end bg-white-A700 py-[103px] md:py-5">
        <div className="mb-[5px] flex w-[83%] flex-col items-center gap-[37px] md:w-full md:p-5">
          <div className="flex flex-col items-start self-stretch">
            <Img
              src="images/img_image_3.png"
              alt="imagethree_one"
              className="h-[357px] w-full object-cover md:h-auto"
            />
            <Img
              src="images/img_ellipse_3_250x250.png"
              alt="circleimage"
              className="relative ml-[61px] mt-[-70px] h-[250px] w-[250px] rounded-[50%] md:ml-0"
            />
          </div>
          <div className="mx-auto flex w-full max-w-[1093px] flex-col gap-1.5">
            <div className="flex items-center gap-[31px] md:flex-col">
              <div className="flex flex-1 flex-col items-start gap-9 md:self-stretch">
                <Text size="md" as="p" className="ml-7 text-justify leading-[140%] md:ml-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, est vel condimentum
                  consequat, velit ante tincidunt ligula, nec porttitor dolor arcu ac diam. Donec lobortis ante eu
                  ligula finibus pretium. Curabitur non ullamcorper magna. Cras commodo ornare sem, ac tempus orci
                  mattis vitae. In quis mollis elit. Etiam rutrum accumsan elit vel congue. Curabitur convallis
                  condimentum augue, at ultricies dui efficitur sit amet. Nullam suscipit sapien vel malesuada
                  efficitur. Praesent ac purus sed ligula sodales pretium. Integer consectetur pharetra consectetur.
                  Suspendisse lacinia ex non turpis sodales, ultricies maximus mauris fermentum. Praesent ut est
                  malesuada, blandit eros ut, placerat libero. Maecenas a dictum urna, id vestibulum orci.
                </Text>
                <div className="flex w-[85%] rounded-[20px] border border-solid border-black-900_4f bg-white-A700_54 p-8 md:w-full sm:p-5">
                  <div className="ml-2.5 flex w-[87%] items-start gap-[30px] md:ml-0 md:w-full sm:flex-col">
                    <Img
                      src="images/img_donation_3_1.png"
                      alt="donation3one"
                      className="h-[75px] w-[75px] object-cover sm:w-full"
                    />
                    <Heading size="3xl" as="h1" className="mt-3 !text-black-900">
                      Créez votre formulaire de don
                    </Heading>
                  </div>
                </div>
                <Heading as="h2" className="ml-7 md:ml-0">
                  Posts
                </Heading>
              </div>
              <div className="mb-3 flex w-[23%] flex-col items-start gap-[17px] self-end md:w-full">
                <Heading as="h3" className="!font-bold">
                  Documents juridiques
                </Heading>
                <div className="flex items-center gap-3.5 self-center border border-solid border-black-900 bg-white-A700 p-3">
                  <Img
                    src="images/img_add_file_1.png"
                    alt="addfileone_one"
                    className="h-[24px] w-[24px] object-cover"
                  />
                  <Heading as="h4" className="mb-[5px] self-end !font-bold !text-black-900">
                    Ajouter un fichier
                  </Heading>
                </div>
                <Button shape="square" className="w-full border-black-900 font-bold sm:px-5">
                  Doc.pdf
                </Button>
              </div>
            </div>
            <div className="flex items-start justify-between gap-5 md:flex-col">
              <div className="mt-[30px] flex w-[65%] flex-col items-center rounded-[20px] border border-solid border-black-900_3d p-3 md:w-full">
                <div className="ml-3.5 flex self-start md:ml-0">
                  <Heading
                    size="xs"
                    as="h5"
                    className="flex h-[22px] items-center justify-center rounded bg-gray-100 px-2 py-[3px] !text-deep_purple-A400"
                  >
                    Animaux
                  </Heading>
                </div>
                <Img src="images/img_rectangle_41.png" alt="image" className="mt-3 h-[201px] w-[93%] object-cover" />
                <Heading
                  size="lg"
                  as="h6"
                  className="ml-[22px] mt-[18px] w-[90%] self-start leading-[18px] !text-black-900 md:ml-0 md:w-full"
                >
                  Aidez un chien à Remarcher : Faites un Don à la Campagne &quot;Remise sur Pied&quot; !
                </Heading>
                <Text
                  size="lg"
                  as="p"
                  className="mt-[23px] w-[91%] text-justify !font-light leading-[18px] !text-black-900 md:w-full"
                >
                  Notre association &quot;PAT&quot; vise à collecter des fonds pour aider un chien exceptionnels à
                  obtenir la chirurgie nécessaire pour soigner son fracture et retrouver leur vie heureuse et active.
                </Text>
                <div className="mb-3.5 mt-[22px] flex w-[92%] justify-center rounded border border-solid border-blue_gray-50 bg-white-A700 shadow-sm md:w-full">
                  <div className="mt-[15px] w-full border-b border-solid border-blue_gray-50 pb-[25px] sm:pb-5">
                    <div className="flex flex-col gap-3.5">
                      <div className="relative h-[8px] rounded bg-blue_gray-50">
                        <div style={{ width: "58%" }} className="absolute h-full rounded bg-light_blue-900" />
                      </div>
                      <div className="flex justify-between gap-5">
                        <div className="flex flex-col items-start">
                          <Text as="p" className="!font-mulish !font-medium !text-blue_gray-500">
                            But
                          </Text>
                          <Heading size="lg" as="h6" className="!text-blue_gray-800">
                            2000DT
                          </Heading>
                        </div>
                        <div className="flex flex-col items-start">
                          <Text as="p" className="!font-mulish !font-medium !text-blue_gray-500">
                            Collecté
                          </Text>
                          <Heading size="lg" as="h6" className="!text-blue_gray-800">
                            1100DT
                          </Heading>
                        </div>
                        <div className="flex flex-col items-start">
                          <Text as="p" className="!font-mulish !font-medium !text-blue_gray-500">
                            Restant
                          </Text>
                          <Heading size="lg" as="h6" className="!text-blue_gray-800">
                            900DT
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button shape="square" className="min-w-[243px] border-black-900 font-bold sm:px-5">
                Doc.pdf
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
