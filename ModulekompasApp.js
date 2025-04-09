import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function ModulekompasApp() {
  const [scores, setScores] = useState({});
  const [inputs, setInputs] = useState({});

  const criteria = [
    {
      id: "criterium1",
      vraag:
        "Hoe actueel en samenhangend zijn jullie leeruitkomsten, en in welke mate bereiden ze studenten voor op concrete taken in de beroepspraktijk?",
      opties: [
        "1 = De leeruitkomsten zijn deels actueel en sluiten deels aan bij de beroepspraktijk.",
        "2 = De leeruitkomsten zijn relevant en actueel, en bereiden studenten voor op de beroepspraktijk.",
        "3 = Leeruitkomsten weerspiegelen actuele beroepsproducten/-taken en bereiden intensief voor op het beroep.",
      ],
    },
    {
      id: "criterium2",
      vraag: "In hoeverre volgen jullie leeruitkomsten het Tuningmodel?",
      opties: [
        "1 = Niet uitgewerkt volgens het Tuningmodel.",
        "2 = Deels volgens het model, kern is herkenbaar.",
        "3 = Volledig uitgewerkt: hoofdactiviteit, werkwoord, onderwerp, context en standaard.",
      ],
    },
    {
      id: "criterium3",
      vraag:
        "Hoe waarborgen jullie dat de leeruitkomsten aansluiten bij het vereiste NLQF-niveau?",
      opties: [
        "1 = Beschrijving van context/kennis/vaardigheden ontbreekt.",
        "2 = Beschrijving aanwezig, maar niet volledig of passend.",
        "3 = Volledige en passende beschrijving op NLQF-niveau.",
      ],
    },
  ];

  return (
    <Tabs defaultValue="leeruitkomsten" className="w-full max-w-4xl mx-auto p-4">
      <TabsList>
        <TabsTrigger value="leeruitkomsten">Leeruitkomsten</TabsTrigger>
      </TabsList>
      <TabsContent value="leeruitkomsten">
        {criteria.map((criterium) => (
          <Card key={criterium.id} className="mb-6">
            <CardContent className="space-y-4 p-6">
              <Label className="text-lg font-semibold block mb-2">
                {criterium.vraag}
              </Label>
              <Select
                onValueChange={(value) => setScores({ ...scores, [criterium.id]: value })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Kies score (1-2-3)" />
                </SelectTrigger>
                <SelectContent>
                  {criterium.opties.map((optie, index) => (
                    <SelectItem key={index} value={(index + 1).toString()}>
                      {optie}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div>
                <Label>Onderbouwing team + stakeholders</Label>
                <Textarea
                  rows={3}
                  placeholder="Toelichting en onderbouwing"
                  value={inputs[criterium.id + "_onderbouwing"] || ""}
                  onChange={(e) =>
                    setInputs({
                      ...inputs,
                      [criterium.id + "_onderbouwing"]: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <Label>Conclusies & vervolgacties (PDCA)</Label>
                <Textarea
                  rows={3}
                  placeholder="Acties en plannen"
                  value={inputs[criterium.id + "_acties"] || ""}
                  onChange={(e) =>
                    setInputs({
                      ...inputs,
                      [criterium.id + "_acties"]: e.target.value,
                    })
                  }
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </TabsContent>
    </Tabs>
  );
}