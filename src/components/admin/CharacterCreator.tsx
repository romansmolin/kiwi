"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { axiosClient } from "@/shared/api/axiosClient";

type Language = "en" | "ru" | "lv";

type FormData = {
    name: {
        en: string;
        ru: string;
        lv: string;
    };
    description: {
        en: string;
        ru: string;
        lv: string;
    };
    image: string; // This could be a URL or a file path depending on your implementation
    availableInUK: boolean;
};

const initialFormState = {
    name: {
        en: '',
        ru: '',
        lv: ''
    },
    description: {
        en: '',
        ru: '',
        lv: ''
    },
    image: '',
    availableInUK: false
}

export default function CharacterCreator() {
    const [formData, setFormData] = useState<FormData>(initialFormState);

    const handleInputChange = (lang: Language, field: keyof FormData, value: string) => {
        if (field === "image") {
            setFormData((prev) => ({
                ...prev,
                image: value,
            }));
        } else if (field === "name" || field === "description") {
            setFormData((prev) => ({
                ...prev,
                [field]: {
                    ...prev[field],
                    [lang]: value,
                },
            }));
        }
    };

    const handleCheckboxChange = (checked: boolean) => {
        setFormData((prev) => ({
            ...prev,
            availableInUK: checked,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // TODO: Switch to ZOD 
        const areAllNamesFilled = Object.values(formData.name).every((name) => name.trim() !== "");
        const areAllDescriptionsFilled = Object.values(formData.description).every((description) => description.trim() !== "");
        const isImageFilled = formData.image.trim() !== "";

        if (!areAllNamesFilled || !areAllDescriptionsFilled || !isImageFilled) {
            alert("Please fill in all fields for all languages.");
            return;
        }

        try {
            await axiosClient.post('/characters/create-character', formData, { withCredentials: true })
        } catch (err) {
            console.log('Error while adding character: ', err)
        }

        setFormData(initialFormState)
    };

    const renderForm = (lang: Language) => (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor={`name-${lang}`}>Name</Label>
                <Input
                    id={`name-${lang}`}
                    value={formData.name[lang]}
                    onChange={(e) => handleInputChange(lang, "name", e.target.value)}
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="image">Image URL</Label>
                <Input
                    id="image"
                    type="url"
                    value={formData.image}
                    onChange={(e) => handleInputChange(lang, "image", e.target.value)}
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor={`description-${lang}`}>Description</Label>
                <Textarea
                    id={`description-${lang}`}
                    value={formData.description[lang]}
                    onChange={(e) => handleInputChange(lang, "description", e.target.value)}
                    required
                />
            </div>
        </div>
    );

    return (
        <form onSubmit={handleSubmit} className="h-full">
            <Card className="w-full h-full flex flex-col">
                <CardHeader>
                    <CardTitle className="text-primary-600">Create a Character</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                    <Tabs defaultValue="en">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="en">English</TabsTrigger>
                            <TabsTrigger value="ru">Russian</TabsTrigger>
                            <TabsTrigger value="lv">Latvian</TabsTrigger>
                        </TabsList>
                        <TabsContent value="en">{renderForm("en")}</TabsContent>
                        <TabsContent value="ru">{renderForm("ru")}</TabsContent>
                        <TabsContent value="lv">{renderForm("lv")}</TabsContent>
                    </Tabs>
                    <div className="flex items-center space-x-2 mt-4">
                        <Checkbox
                            id="availableInUK"
                            checked={formData.availableInUK}
                            onCheckedChange={handleCheckboxChange}
                        />
                        <label
                            htmlFor="availableInUK"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Is character available in UK?
                        </label>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full bg-primary-600">Create Character</Button>
                </CardFooter>
            </Card>
        </form>
    );
}
