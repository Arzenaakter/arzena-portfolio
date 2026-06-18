/* eslint-disable react/no-unescaped-entities */

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Container from "../common/Container";
import HeadingComponent from "../common/HeadingComponent";
import {
  FiGlobe,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import MotionComponent from "../common/MotionComponent";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: FiMapPin,
      title: "Location",
      details: "Bogura, Bangladesh",
      description: "Available for remote work worldwide",
    },
    {
      icon: FiPhone,
      title: "Phone",
      details: "+8801766179470",
      description: "Available 9 AM - 10 PM (GMT+6)",
    },
    {
      icon: FiMail,
      title: "Email",
      details: "arzenaakter@gmail.com",
      description: "Response within 24 hours",
    },
    {
      icon: FiGlobe,
      title: "Languages",
      details: "Bangla, English, Hindi",
      description: "Multilingual communication",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <Container>
        <div className="max-w-6xl mx-auto">
          <HeadingComponent
            heading=" Get In Touch"
            subHeading="Ready to start your next project? Let's discuss how we can work
              together to create something amazing."
          />

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <MotionComponent>
                <Card className="group overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <FiMessageCircle className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-semibold">Send Message</h3>
                    </div>

                    <form
                      className="space-y-6"
                      action="https://formspree.io/f/xrgwzdqq"
                      method="POST"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-2"
                          >
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your full name"
                            required
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2"
                          >
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                            required
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="subject"
                            className="block text-sm font-medium mb-2"
                          >
                            Subject *
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="Project discussion, collaboration, etc."
                            required
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium mb-2"
                          >
                            Phone *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Project discussion, collaboration, etc."
                            required
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-2"
                        >
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project, requirements, timeline, and any specific details..."
                          required
                          className="w-full min-h-28 resize-none"
                        />
                      </div>

                      <Button type="submit" className="w-full md:w-auto gap-2">
                        <FiSend className="w-4 h-4" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </MotionComponent>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <MotionComponent>
                <Card className="group overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-6">
                      {contactInfo.map((info, index) => {
                        const IconComponent = info.icon;
                        return (
                          <div key={index} className="flex gap-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium text-sm">
                                {info.title}
                              </h4>
                              <p className="text-foreground font-medium">
                                {info.details}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {info.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </MotionComponent>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
