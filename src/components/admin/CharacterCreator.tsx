"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

type Language = "en" | "ru" | "lv"

type CharacterData = {
    name: string
    image: string
    description: string
}

type FormData = {
    [key in Language]: CharacterData
}

export default function CharacterCreator() {
    const [formData, setFormData] = useState<FormData>({
        en: { name: "", image: "", description: "" },
        ru: { name: "", image: "", description: "" },
        lv: { name: "", image: "", description: "" },
    })

    const handleInputChange = (lang: Language, field: keyof CharacterData, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [lang]: {
                ...prev[lang],
                [field]: value,
            },
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const isValid = Object.values(formData).some(
            (lang) => lang.name && lang.image && lang.description
        )

    }

    const renderForm = (lang: Language) => (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor={`name-${lang}`}>Name</Label>
                <Input
                    id={`name-${lang}`}
                    value={formData[lang].name}
                    onChange={(e) => handleInputChange(lang, "name", e.target.value)}
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor={`image-${lang}`}>Image URL</Label>
                <Input
                    id={`image-${lang}`}
                    type="url"
                    value={formData[lang].image}
                    onChange={(e) => handleInputChange(lang, "image", e.target.value)}
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor={`description-${lang}`}>Description</Label>
                <Textarea
                    id={`description-${lang}`}
                    value={formData[lang].description}
                    onChange={(e) => handleInputChange(lang, "description", e.target.value)}
                    required
                />
            </div>
        </div>
    )

    return (
        <form onSubmit={handleSubmit}>
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Create a Character</CardTitle>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="ru">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="en">English</TabsTrigger>
                            <TabsTrigger value="es">Russian</TabsTrigger>
                            <TabsTrigger value="fr">Latvia</TabsTrigger>
                        </TabsList>
                        <TabsContent value="en">{renderForm("ru")}</TabsContent>
                        <TabsContent value="es">{renderForm("lv")}</TabsContent>
                        <TabsContent value="fr">{renderForm("en")}</TabsContent>
                    </Tabs>
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full">Create Character</Button>
                </CardFooter>
            </Card>
        </form>
    )
}